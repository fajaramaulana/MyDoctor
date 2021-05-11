/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors} from '../../utils';
import {Fire} from '../../config';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required('Required!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  profession: yup
    .string()
    .required('Required!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .min(5, 'Too short, minimum 5 character'),
  email: yup.string().email('Email must be a valid email!'),
  password: yup
    .string()
    .required('Required!')
    .min(8, 'Too short, minimum 8 character')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
    ),
  confPassword: yup
    .string()
    .required('Required!')
    .oneOf([yup.ref('password'), null], 'Password do not match!'),
});

const Register = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const [loading, setLoading] = useState(false);

  const onContinue = data => {
    console.log(data);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(success => {
        setLoading(false);
        reset('', {
          keepValues: false,
        });
        console.log('register success', success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        console.log('error register: ', errorMessage);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Controller
              name={'fullName'}
              control={control}
              defaultValue={''}
              render={({field: {onChange, value, onBlur}}) => (
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
            <Gap height={10} />
            <Controller
              name={'email'}
              control={control}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  label="Email"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="masukkan email anda"
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Gap height={10} />
            <Controller
              name={'password'}
              control={control}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  label="Password"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="masukkan password anda"
                  errorMessage={errors.password?.message}
                  secureTextEntry
                />
              )}
            />
            <Controller
              name={'confPassword'}
              control={control}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  label="Confirm Password"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="masukkan kembali password anda"
                  errorMessage={errors.confPassword?.message}
                  secureTextEntry
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
