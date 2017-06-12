import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { NextFooter } from './Buttons'

export const DisplayCardView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <Text> {who.name} </Text>
      <Text> {cards[who.faction][who.role].name} </Text>
      <Image source={cards[who.faction][who.role].image} style={{height: 450, width: 300}} />
      <NextFooter onPress={onSubmit} />
    </View>
  )
}

export default DisplayCardView
