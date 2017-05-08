import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const StartOfGameView = ({statueHolder, onSubmit, onMenu}) => {
  console.log("rendering StartOfNightView")
    console.log(statueHolder)
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Text> Wszyscy idą spać </Text>
    <Button title="Rozpocznij grę" onPress={onSubmit} />
    </View>
  );
}

export default StartOfGameView
