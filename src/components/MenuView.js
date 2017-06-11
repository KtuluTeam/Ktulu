import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const MenuView = ({onSubmit}) => {
  return (
    <View>
      <Text>
    Tu bedzie menu
    </Text>
      <Button title='Wróć' onPress={onSubmit} />
    </View>
  )
}

export default MenuView
