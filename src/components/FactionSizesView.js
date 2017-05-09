import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

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

      <Button title="Zatwierdź" onPress={onSubmit} />
    </View>
  )
}
