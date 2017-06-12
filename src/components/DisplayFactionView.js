import React from 'react'
import {
  Text,
  View
} from 'react-native'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'


export const DisplayFactionView = ({instruction, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <ReadLoud text={who.name + '\nFrakcja: ' + cards[who.faction].name} />
      <ManitouInfo text={instruction} />
      <NextFooter onPress={onSubmit} />
    </View>
  )
}

export default DisplayFactionView
