import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import { NextFooter } from './Buttons'

export const WakeUpByNameView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <Text> Obudź uczestnika: {who.name} poprzez dotknięcie</Text>
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByNameView
