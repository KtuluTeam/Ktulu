import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const WakeUpByNameView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <Text> Obudź uczestnika: {who.name} poprzez dotknięcie</Text>
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByNameView
