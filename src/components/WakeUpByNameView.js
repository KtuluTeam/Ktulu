import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'

export const WakeUpByNameView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Text> {text} </Text>
      <Text> Obudź uczestnika: {who.name} poprzez dotknięcie</Text>
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByNameView
