import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor11} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkProfile = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.nama}>{title}</Text>
        <Text style={styles.desc}>Dokter Gigi</Text>
      </View>
      <Image source={DummyDoctor11} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {flex: 1},
  nama: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.subTitle,
    textAlign: 'center',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
});
