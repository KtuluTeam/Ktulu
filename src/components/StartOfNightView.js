import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={'Ogłoś'} />
      <ReadLoud text={'Wszyscy idą spać'} />
      <Button title='Rozpocznij noc' onPress={onSubmit} />
    </View>
  )
}

export default StartOfNightView
