import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'
import { styles } from '../styles/styles'

export const NumberPlayersView = ({number, onSubmit}) => {
  return (
    <View>
      <Text style={styles.setupText}>Liczba graczy</Text>
      <Text style={styles.setupText}>
        {number}
      </Text>
      <NextFooter title='Zatwierdź' onPress={onSubmit} />
    </View>
  )
}

export default NumberPlayersView
