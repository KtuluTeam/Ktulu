import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import * as cards from '../cards'
import { NO_STATUE_HOLDER } from '../reducers/stages/tools'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'

let handbookImg = require('../../img/icons/handbook.png')

export const StatueHolder = ({statueHolder}) => {
  if (statueHolder === NO_STATUE_HOLDER) {
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

const TopView = ({statueHolder, onMenu}) => {
  return (
    <View style={styles.header} >
      <TouchableOpacity onPress={onMenu} style={styles.menuOpacity} >
        <Image source={handbookImg} style={styles.handbookImage} />
      </TouchableOpacity>
      <StatueHolder statueHolder={statueHolder} />
    </View>
  )
}

export const Top = connect(
  ({statueHolder}) => { return { statueHolder } },
  (dispatch) => { return { onMenu: () => { dispatch({ type: 'MENU' }) } } }
)(TopView)

export default { Top }
