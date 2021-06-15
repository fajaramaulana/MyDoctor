import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, email} = route.params;
  console.log('fullName', fullName);
  console.log('profession', profession);
  console.log('email', email);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        console.log('response:', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Yah kamu ga jadi pilih foto ya?',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const sourcePhoto = {uri: response.assets[0].uri};
          setPhoto(sourcePhoto);
          setHasPhoto(true);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>{fullName}</Text>
          <Gap height={4} />
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button disable={!hasPhoto} title="Upload and Continue" />
          <Gap height={30} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingBottom: 64,
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
});
