import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const NumberPlayersView = ({number, onSubmit}) => {
  return (
    <View>
      <Text>Liczba graczy</Text>
      <Text>
        {number}
      </Text>
      <Button title='Zatwierdź' onPress={onSubmit} />
    </View>
  )
}

export default NumberPlayersView
