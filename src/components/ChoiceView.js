import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { Top } from './index'

let yesImg = require('../../img/icons/yes.png')
let noImg = require('../../img/icons/no.png')

export const ChoiceView = ({onMenu, statueHolder, onYes, onNo, text}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {text} </Text>
      <View style={{flexDirection: 'row', bottom: 0}} >
        <TouchableOpacity onPress={onYes} style={{width: 150}} >
          <Image source={yesImg} style={{width: 100, height: 100, left: 50}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onNo} style={{width: 150}}>
          <Image source={noImg} style={{width: 100, height: 100, left: 50}} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChoiceView
