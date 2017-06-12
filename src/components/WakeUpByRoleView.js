import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { NextFooter } from './Buttons'

export const WakeUpByRoleView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <Text> Obudź postać: {cards[who.faction][who.role].name} </Text>
      <Text> Budzi się {cards[who.faction][who.role].name} </Text>
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByRoleView
