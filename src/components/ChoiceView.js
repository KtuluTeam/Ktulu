import React from 'react'
import {
  Text,
  View,
  Button,
  Picker
} from 'react-native'
import { Top } from './index'

let yesImg = require("../../img/yes.png")

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Text> {text} </Text>
    <TouchableOpacity onPress={onYes}>
      <Image source={yesImg} style={{width:200, height:200}} />
    </TouchableOpacity>
    <Button title="NIE"  onPress={onNo} />
    </View>
  );
}

export default ChoiceView
