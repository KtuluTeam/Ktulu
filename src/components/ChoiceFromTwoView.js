import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'

export const ChoiceFromTwoView = ({onMenu, statueHolder, participant1, participant2,
  onSelect, text, instruction}) => {
  return (
    <View>
      <ReadLoud text={text} />
      <ManitouInfo text={instruction} />
      <Button title={participant1.name} onPress={() => onSelect([participant1])} />
      <Button title={participant2.name} onPress={() => onSelect([participant2])} />
      <Button title='Remis' onPress={() => onSelect([participant1, participant2]) } />
    </View>
  )
}

export default ChoiceFromTwoView
