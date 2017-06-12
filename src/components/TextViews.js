import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import * as cards from '../cards'
import { styles } from '../styles/styles'

export const ReadLoud = ({text}) => {
  if (text === '')
    return (<View />)

  return (
    <View style={styles.readLoud}>
      <Text style={styles.readLoudText}>
        {text}
      </Text>
    </View>
  )
}

export const ManitouInfo = ({text}) => {
  if (text === '')
    return (<View />)

  return (
    <View style={styles.manitouInfo}>
      <Text style={styles.manitouInfoText}>
        {text}
      </Text>
    </View>
  )
}
