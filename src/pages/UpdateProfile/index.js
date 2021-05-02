import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
      keyboardVerticalOffset={-300}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.page}>
          <Header title="Edit Profile" onPress={() => navigation.goBack()} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Profile isRemove />
              <Gap height={26} />
              <Input label="Full Name" />
              <Gap height={24} />
              <Input label="Pekerjaan" />
              <Gap height={24} />
              <Input label="Email Address" />
              <Gap height={24} />
              <Input label="Password" />
              <Gap height={40} />
              <Button
                title="Continue"
                onPress={() => navigation.navigate('UploadPhoto')}
              />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
