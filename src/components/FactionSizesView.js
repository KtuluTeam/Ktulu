import React from 'react'
import {
  Text,
  View
} from 'react-native'
import { NextFooter } from './Buttons'

export const FactionSizesView = ({citizens, bandits, indians, onSubmit}) => {
  return (
    <View>
      <Text>Liczebność poszczególnych frakcji </Text>
      <Text>
        Miastowych: {citizens}
      </Text>
      <Text>
        Bandytów: {bandits}
      </Text>
      <Text>
        Indian: {indians}
      </Text>

      <NextFooter title='Zatwierdź' onPress={onSubmit} />
    </View>
  )
}
