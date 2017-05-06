import React from 'react'
import {
  Text,
  View,
} from 'react-native'

export const FactionSizesView = ({citizens, bandits, indians, onSubmit}) => {
  return (
    <View>
      <Text>
        Miastowych: {citizens}
      </Text>
      <Text>
        Bandytów: {bandits}
      </Text>
      <Text>
        Indian: {indians}
      </Text>
    </View>
  )
}
