import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import * as cards from '../cards'
import { styles } from '../styles/styles'

let handbookImg = require('../../img/icons/handbook.png')


export const StatueHolder = ({statueHolder}) => {
  let pos = ''
  if (statueHolder !== null) {
    pos = 'Posążek: [' + cards[statueHolder.faction][statueHolder.role].name + ', ' + statueHolder.name + ']'
  }
  return (
    <View>
      <Text>
        {pos}
      </Text>
    </View>
  )
}

export const Top = ({statueHolder, onMenu}) => {
  return (
    <View style={styles.header} >
      <TouchableOpacity onPress={onMenu} style={styles.menuOpacity} >
        <Image source={handbookImg} style={styles.handbookImage} />
      </TouchableOpacity>
      <StatueHolder statueHolder={statueHolder} />
    </View>
  )
}

export default { Top }
