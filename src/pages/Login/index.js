import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors, fonts, storeData} from '../../utils';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('You need email to login to your account!!')
    .email('Email must be a valid email!'),
  passwordLogin: yup
    .string()
    .required('You need password to login to your account!'),
});

console.log(validationSchema);

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid},
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
    // resolver: yupResolver(ValidationSchema),
    // resolver: validation,
  });

  const onSubmitLogin = form => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.passwordLogin)
      .then(res => {
        console.log('Success: ', res);
        setLoading(false);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user:', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(err => {
        console.log('error: ', err);
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
          <Controller
            name={'email'}
            control={control}
            defaultValue={''}
            render={({field: {onChange, value, onBlur}}) => (
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

          <Gap height={24} />
          <Controller
            name={'passwordLogin'}
            control={control}
            defaultValue={''}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Password"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="masukkan password anda"
                errorMessage={errors.passwordLogin?.message}
                secureTextEntry
              />
            )}
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button
            disable={!isDirty || !isValid}
            title="Sign In"
            onPress={handleSubmit(onSubmitLogin)}
          />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
    marginVertical: 40,
    fontFamily: fonts.primary[600],
    maxWidth: 153,
  },
});
