import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> Wszyscy idą spać </Text>
      <Button title='Rozpocznij noc' onPress={onSubmit} />
    </View>
  )
}

export default StartOfNightView
