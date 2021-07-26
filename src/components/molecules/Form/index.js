import React from 'react';
import {Controller} from 'react-hook-form';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Input} from '../../atoms';

export const ValidationSchema = {
  emailLogin: yup
    .string()
    .required('You need email to login to your account!!')
    .email('Email must be a valid email!'),
  passwordLogin: yup
    .string()
    .required('You need password to login to your account!'),
  fullName: yup
    .string()
    .required('Required!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .min(5, 'Too short, minimum 5 character'),
  profession: yup
    .string()
    .required('Required!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .min(5, 'Too short, minimum 5 character'),
  email: yup
    .string()
    .required('Required!')
    .email('Email must be a valid email!'),
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
};

export const validation = yupResolver(ValidationSchema);

export const Form = props => {
  const {
    control,
    // formState: {errors},
    // errors,
  } = props.form;
  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={''}
      render={({field: {onChange, value, onBlur}}) => (
        <Input
          label={props.label}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          value={value}
          placeholder={props.placeholder}
          errorMessage={props.error}
        />
      )}
    />
  );
};
