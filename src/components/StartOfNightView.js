import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <ReadLoud text={'Wszyscy idą spać'} />
      <ManitouInfo text={'Ogłoś'} />
      <NextFooter title='Rozpocznij noc' onPress={onSubmit} />
    </View>
  )
}

export default StartOfNightView
