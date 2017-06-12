import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={text} />
      <Button title='TAK' onPress={onYes} />
      <Button title='NIE' onPress={onNo} />
    </View>
  )
}

export default ChoiceView
