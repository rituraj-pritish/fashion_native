import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Input from 'src/components/ui/Input';
import Screen from 'src/components/ui/Screen';
import Button from 'src/components/ui/Button';
import SCREENS from 'src/constants/screens'

const SignIn = ({ navigation, signIn }) => {
  const [email, setEmail] = useState('demo@demo.com');
  const [password, setPassword] = useState('123123');

  const handleSubmit = () => {
    signIn({ email, password });
  };

  return (
    <Screen>
      <Text>Email</Text>
      <Input value={email} onTextChange={(val) => setEmail(val)} />

      <Text>Password</Text>
      <Input value={password} onTextChange={(val) => setPassword(val)} />

      <Button title='Sign In' onPress={handleSubmit} />

      <View>
        <Text>Don't have an account </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGN_UP)}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default SignIn;
