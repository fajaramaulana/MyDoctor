import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor7} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Dudung Duul"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Dudung Duul"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Dudung Duul"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Dudung Duul"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Dudung Duul"
        desc="Pria"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
