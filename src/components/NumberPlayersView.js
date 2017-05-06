import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const NumberPlayersView = ({number, onSubmit}) => {
  console.log("rendering NumberPlayersView")
  return (
    <View>
      <Text>
        {number}
      </Text>
      <Button title="Zatwierdź" onPress={onSubmit} />
    </View>
  );
}

export default NumberPlayersView
