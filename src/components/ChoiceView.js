import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'
import { ChoiceFooter } from './Buttons'

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={text} />
      <ChoiceFooter onYes={onYes} onNo={onNo} />
    </View>
  )
}

export default ChoiceView
