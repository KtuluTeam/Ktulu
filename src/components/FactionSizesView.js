import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'
import { styles } from '../styles/styles'

export const FactionSizesView = ({citizens, bandits, indians, onSubmit}) => {
  return (
    <View>
      <Text style={styles.setupText}>Liczebność poszczególnych frakcji </Text>
      <Text style={styles.setupText}>
        Miastowych: {citizens}
      </Text>
      <Text style={styles.setupText}>
        Bandytów: {bandits}
      </Text>
      <Text style={styles.setupText}>
        Indian: {indians}
      </Text>

      <NextFooter title='Zatwierdź' onPress={onSubmit} />
    </View>
  )
}
