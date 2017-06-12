import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'

export const StartOfGameView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={'Ogłoś'} />
      <ReadLoud text={'Wszyscy idą spać'} />
      <Button title='Rozpocznij grę' onPress={onSubmit} />
    </View>
  )
}

export default StartOfGameView
