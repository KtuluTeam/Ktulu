import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { ChoiceFooter } from './Buttons'

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
      <Text> {text} </Text>
      <ChoiceFooter onYes={onYes} onNo={onNo} />
    </View>
  )
}

export default ChoiceView
