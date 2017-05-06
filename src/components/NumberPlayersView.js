import React from 'react'
import {
  Text,
  View,
} from 'react-native'

export const NumberPlayersView = ({number}) => {
  console.log("rendering NumberPlayersView")
  return (
    <View>
      <Text>
        {number}
      </Text>
    </View>
  );
}

export default NumberPlayersView
