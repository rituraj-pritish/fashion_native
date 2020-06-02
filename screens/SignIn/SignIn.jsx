import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import Input from 'app/components/ui/Input'
import Screen from 'app/components/ui/Screen'
import Button from 'app/components/ui/Button'

const SignIn = ({ navigation, signIn }) => {
  const [email, setEmail] = useState('demo@demo.com')
  const [password, setPassword] = useState('123123')

  const handleSubmit = () => {
    signIn({ email, password })
  }

  return (
    <Screen>
      <Text>Email</Text>
      <Input value={email} onTextChange={val => setEmail(val)} />

      <Text>Password</Text>
      <Input value={password} onTextChange={val => setPassword(val)} />

      <Button title='Sign In' onPress={handleSubmit} />
    </Screen>
  )
}

export default SignIn
