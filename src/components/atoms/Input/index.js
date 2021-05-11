import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {colors, fonts} from '../../../utils';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
  errorMessage,
  defaultValue,
  onBlur,
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        defaultValue={defaultValue}
        onFocus={onFocusForm}
        onBlur={(onBlurForm, onBlur)}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
      <Text style={styles.alerta}>{errorMessage}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    marginBottom: 6,
    fontFamily: fonts.primary.normal,

    fontSize: 16,
    color: colors.text.secondary,
  },
  alerta: {
    color: colors.text.alerta,
  },
});
