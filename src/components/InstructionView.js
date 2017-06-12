import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const InstructionView = ({text, onMenu, statueHolder, onSubmit, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={instruction} />
      <ReadLoud text={text} />
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default InstructionView
