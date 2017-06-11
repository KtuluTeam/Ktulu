import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import { ChoiceFooter } from './Buttons'

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <ChoiceFooter onYes={onYes} onNo={onNo} />
    </View>
  )
}

export default ChoiceView
