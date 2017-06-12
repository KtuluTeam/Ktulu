import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { NextFooter } from './Buttons'

export const DisplayFactionView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <Text> {who.name} </Text>
      <Text> Frakcja: {cards[who.faction].name} </Text>
      <NextFooter onPress={onSubmit} />
    </View>
  )
}

export default DisplayFactionView
