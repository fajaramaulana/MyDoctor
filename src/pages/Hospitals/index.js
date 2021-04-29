import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';
import {ILHospitalBG} from '../../assets/illustration';
import {ListHospital} from '../../components/molecules';
import {colors} from '../../utils';
import {fonts} from '../../utils/fonts';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Hospitals Page</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          name="Sari Asih"
          address="Jl. Perumnas III "
          pict={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Harapan Kita"
          address="Jl. KS Tubun"
          pict={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit Mata"
          name="Jakarta Eye Center"
          address="Jl. Puri Kembangan"
          pict={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
