import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import { NextFooter } from './Buttons'

export const InstructionView = ({text, onMenu, statueHolder, onSubmit, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {instruction} </Text>
      <Text> {text} </Text>
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default InstructionView
