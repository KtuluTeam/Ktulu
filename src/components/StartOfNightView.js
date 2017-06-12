import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <Text> Wszyscy idą spać </Text>
      <Button title='Rozpocznij noc' onPress={onSubmit} />
    </View>
  )
}

export default StartOfNightView
