import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'

export const WakeUpByRoleView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={'Budzi się ' +cards[who.faction][who.role].name} />
      <ManitouInfo text={'Obudź postać: ' + cards[who.faction][who.role].name} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default WakeUpByRoleView
