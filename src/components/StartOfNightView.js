import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  return (
    <View>
      <ReadLoud text={'Wszyscy idą spać'} />
      <ManitouInfo text={'Ogłoś'} />
      <Button title='Rozpocznij noc' onPress={onSubmit} />
    </View>
  )
}

export default StartOfNightView
