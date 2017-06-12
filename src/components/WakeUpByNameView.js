import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'

export const WakeUpByNameView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={text} />
      <ManitouInfo text={'Obudź uczestnika: ' + who.name + 'POPRZEZ DOTKNIĘCIE'} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByNameView
