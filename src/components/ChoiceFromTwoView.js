import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const ChoiceFromTwo = ({onMenu, statueHolder, participant1, participant2,
  onSelect, text, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {instruction} </Text>
      <Text> {text} </Text>
      <Button title={participant1.name} onPress={onSelect([participant1])} />
      <Button title={participant2.name} onPress={onSelect([participant2])} />
      <Button title='Remis' onPress={onSelect([participant1, participant2])} />
    </View>
  )
}

export default ChoiceView

