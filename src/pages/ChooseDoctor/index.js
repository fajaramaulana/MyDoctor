import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor7} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor7}
        name="Dudung Duul"
        desc="Pria"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List type="next" profile={DummyDoctor7} name="Dudung Duul" desc="Pria" />
      <List type="next" profile={DummyDoctor7} name="Dudung Duul" desc="Pria" />
      <List type="next" profile={DummyDoctor7} name="Dudung Duul" desc="Pria" />
      <List type="next" profile={DummyDoctor7} name="Dudung Duul" desc="Pria" />
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
