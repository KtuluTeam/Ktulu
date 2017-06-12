import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const DisplayCardView = ({instruction, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={instruction} />
      <ReadLoud text={who.name + '\n' + cards[who.faction][who.role].name} />
      <ScrollView style={{height: 260, width: 410, backgroundColor: '#ffffff'}} >
        <Image source={cards[who.faction][who.role].image} style={{height: 450, width: 300, left: 50}} />
      </ScrollView>
      <NextFooter onPress={onSubmit} />
    </View>
  )
}

export default DisplayCardView
