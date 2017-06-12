import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'

export const StartDayView = ({onMenu, statueHolder, onDuel, onSearch, duels}) => {
  return (
    <View>
      <Button title='Przejdź do pojedynku' onPress={onDuel} />
      <Button title='Przejdź do przeszukiwania' onPress={onSearch} />
    </View>
  )
}

export default StartDayView
