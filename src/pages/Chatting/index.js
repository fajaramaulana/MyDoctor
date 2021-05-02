import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  const scrollViewRef = useRef();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
      keyboardVerticalOffset={-300}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.page}>
          <Header
            title="Fajar Agus Maulana"
            type="dark-profile"
            onPress={() => navigation.goBack()}
          />
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({animated: true})
            }>
            <View style={styles.content}>
              <Text style={styles.chatDate}>Sabtu, 1 Mei 2021</Text>
              <ChatItem isMe />
              <ChatItem />
              <ChatItem isMe />
              <ChatItem isMe />
              <ChatItem />
              <ChatItem isMe />
            </View>
          </ScrollView>
          <InputChat />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {flex: 1},
});
