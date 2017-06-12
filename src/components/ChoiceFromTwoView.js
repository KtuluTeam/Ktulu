import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'

export const ChoiceFromTwoView = ({onMenu, statueHolder, participant1, participant2,
  onSelect, text, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ReadLoud text={text} />
      <ManitouInfo text={instruction} />
      <View style={{height: 296}} />
      <Button title={participant1.name} onPress={() => onSelect([participant1])} />
      <View style={{height: 2}} />
      <Button title={participant2.name} onPress={() => onSelect([participant2])} />
      <View style={{height: 2}} />
      <Button title='Remis' onPress={() => onSelect([participant1, participant2]) } />
    </View>
  )
}

export default ChoiceFromTwoView
