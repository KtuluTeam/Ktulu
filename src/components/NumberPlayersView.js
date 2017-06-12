import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'

export const NumberPlayersView = ({number, onSubmit}) => {
  return (
    <View>
      <Text>Liczba graczy</Text>
      <Text>
        {number}
      </Text>
      <NextFooter title='Zatwierdź' onPress={onSubmit} />
    </View>
  )
}

export default NumberPlayersView
