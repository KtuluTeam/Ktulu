import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const ChoiceView = ({from, onMenu, statueHolder, onSubmit}) => {
  console.log("rendering ChoiceView")
    console.log(statueHolder)
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Text> choice </Text>
    <Button title="OK"  onPress={onSubmit} />
    </View>
  );
}

export default ChoiceView
