import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Fajar Agus M" desc="Dentist" />
      <Gap height={10} />
      <ProfileItem
        label="Alumnus"
        value="Universitas Pembangunan Nasional Veteran Jakarta, 2020"
      />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Ini" />
      <ProfileItem label="No. STR" value="1610511059" />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
