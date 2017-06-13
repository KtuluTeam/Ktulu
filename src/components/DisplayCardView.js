import React from 'react'
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const DisplayCardView = ({instruction, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
      <ReadLoud text={who.name + '\n' + cards[who.faction][who.role].name} />
      <ManitouInfo text={instruction} />
      <ScrollView style={{height: 250, width: 388, backgroundColor: '#ffffff', margin: 10, borderRadius: 5, left: 2}} >
        <Image source={cards[who.faction][who.role].image} style={{height: 450, width: 300, left: 43}} />
      </ScrollView>
      <NextFooter onPress={onSubmit} />
    </View>
  )
}

export default DisplayCardView
