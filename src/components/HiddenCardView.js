import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'
import { styles } from '../styles/styles'

export const HiddenCardView = ({number, index, onSubmit}) => {
  let text = ''
  let buttonTitle = ''
  if (number === index) {
    text = 'Oddaj urządzenie Manitou'
    buttonTitle = 'Przejdź do rozgrywki'
  } else {
    text = 'Podaj urządzenie kolejnemu graczowi'
    buttonTitle = 'Odkryj kartę'
  }
  return (
    <View>
      <Text style={styles.setupText}>
        {text}
      </Text>
      <NextFooter title={buttonTitle} onPress={onSubmit} />
    </View>
  )
}

export default HiddenCardView
