import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'

export const InstructionView = ({text, onMenu, statueHolder, onSubmit, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={instruction} />
      <ReadLoud text={text} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default InstructionView
