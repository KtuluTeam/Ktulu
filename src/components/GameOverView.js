import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const GameOverView = ({onMenu, statueHolder, winner, onNewGame}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={'Koniec gry.\nWygrali ' + winner + '!'} />
      <NextFooter title='Nowa gra' onPress={onNewGame} />
    </View>
  )
}

export default GameOverView
