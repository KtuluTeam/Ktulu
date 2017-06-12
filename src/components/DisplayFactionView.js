import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'

export const DisplayFactionView = ({instruction, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={instruction} />
      <ReadLoud text={who.name + '\nFrakcja: ' + cards[who.faction].name} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default DisplayFactionView
