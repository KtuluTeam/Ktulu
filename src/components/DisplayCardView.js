import React from 'react'
import {
  Text,
  View,
  Button,
  Image
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'

export const DisplayCardView = ({instruction, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={instruction} />
      <ReadLoud text={who.name} />
      <ReadLoud text={cards[who.faction][who.role].name} />
      <Image source={cards[who.faction][who.role].image} style={{height: 450, width: 300}} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default DisplayCardView
