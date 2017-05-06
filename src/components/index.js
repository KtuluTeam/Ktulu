import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import * as cards from '../cards'

export const StatueHolder = ({statueHolder}) => {
  console.log('statueholder', statueHolder)
  return (
    <View>
      <Text>
        Posążek: [{cards[statueHolder.faction][statueHolder.role].name}, {statueHolder.name}]
      </Text>
  </View>
  )
}

export const Top = ({statueHolder, onMenu}) => {
  console.log('top', statueHolder)
  return (
    <View>
      <Button title="Menu" onPress={onMenu} />
    <StatueHolder statueHolder={statueHolder} />
  </View>
  )
}



export default { Top }
