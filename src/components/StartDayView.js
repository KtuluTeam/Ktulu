import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const StartDayView = ({onMenu, statueHolder, onDuel, onSearch, duels}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <Button title='Przejdź do pojedynku' onPress={onDuel} />
      <Button title='Przejdź do przeszukiwania' onPress={onSearch} />
    </View>
  )
}

export default StartDayView
