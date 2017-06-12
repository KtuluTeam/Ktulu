import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'
import { ChoiceFooter } from './Buttons'

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
      <ReadLoud text={text} />
      <ChoiceFooter onYes={onYes} onNo={onNo} />
    </View>
  )
}

export default ChoiceView
