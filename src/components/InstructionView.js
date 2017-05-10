import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const InstructionView = ({text, onMenu, statueHolder, onSubmit, instruction}) => {
  console.log("rendering StartOfNightView")
    console.log(statueHolder)
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Text> {instruction} </Text>
    <Text> {text} </Text>
    <Button title="OK"  onPress={onSubmit} />
    </View>
  );
}

export default InstructionView
