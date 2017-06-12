import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={'Ogłoś'} />
      <ReadLoud text={'Wszyscy idą spać'} />
      <NextFooter title='Rozpocznij noc' onPress={onSubmit} />
    </View>
  )
}

export default StartOfNightView
