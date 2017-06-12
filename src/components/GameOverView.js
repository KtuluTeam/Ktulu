import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const GameOverView = ({onMenu, statueHolder, winner, onNewGame}) => {
  return (
    <View>
      <Text> Koniec gry. </Text>
      <Text> Wygrali {winner}! </Text>
      <Button title="Nowa gra" onPress={onNewGame} />
    </View>
  )
}

export default GameOverView

