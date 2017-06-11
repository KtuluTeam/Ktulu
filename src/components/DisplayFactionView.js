import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'

export const DisplayFactionView = ({text, onMenu, statueHolder, onSubmit, who}) => {
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Text> {text} </Text>
    <Text> {who.name} </Text>
    <Text> Frakcja: {cards[who.faction].name} </Text>
    <Button title="OK"  onPress={onSubmit} />
    </View>
  );
}

export default DisplayFactionView
