import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'

export const InstructionView = ({text, onMenu, statueHolder, onSubmit, instruction}) => {
  return (
    <View>
      <Text> {instruction} </Text>
      <Text> {text} </Text>
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default InstructionView
