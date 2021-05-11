import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../config';
import {useForm, Controller} from 'react-hook-form';

const Register = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [fullName, setFullName] = useState('');
  const [userName, setUsername] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const onContinue = async data => {
    try {
      console.log('data', data);
      // () => navigation.navigate('UploadPhoto')
    } catch (e) {}
  };

  console.log('error', errors);
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Controller
              name={'fullName'}
              control={control}
              rules={{
                required: 'Required!',
                minLength: {
                  message: 'Use at least 5 characters.',
                  value: 5,
                },
              }}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  label="Full Name"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="masukkan nama anda"
                  errorMessage={errors.fullName?.message}
                />
              )}
            />
            <Gap height={10} />
            <Controller
              name={'profession'}
              control={control}
              rules={{
                required: 'Required',
              }}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  label="Profession"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="masukkan pekerjaan anda"
                  errorMessage={errors.profession?.message}
                />
              )}
            />
            <Gap height={26} />
            <Button title="Continue" onPress={handleSubmit(onContinue)} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  alerta: {
    color: colors.text.alerta,
  },
});
