import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const StartOfGameView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <Text> Wszyscy idą spać </Text>
      <Button title='Rozpocznij grę' onPress={onSubmit} />
    </View>
  )
}

export default StartOfGameView
