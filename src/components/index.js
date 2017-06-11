import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import * as cards from '../cards'
import { styles } from '../styles/styles'

let handbookImg = require('../../img/icons/handbook.png')

export const StatueHolder = ({statueHolder}) => {
  if (statueHolder === null) {
    return (<View />)
  }
  return (
    <View style={styles.statueHolderView}>
      <Text style={styles.statueHolderText} >
        Posążek posiada:
      </Text>
      <Text style={styles.statueHolderText} >
        {'Postać: ' + cards[statueHolder.faction][statueHolder.role].name}
      </Text>
      <Text style={styles.statueHolderText} >
        {'Imię: ' + statueHolder.name}
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
