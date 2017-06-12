import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const GameOverView = ({onMenu, statueHolder, winner, onNewGame}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> Koniec gry. </Text>
      <Text> Wygrali {winner}! </Text>
      <Button title="Nowa gra" onPress={onNewGame} />
    </View>
  )
}

export default GameOverView

