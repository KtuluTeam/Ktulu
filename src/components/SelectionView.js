import React from 'react'
import {
  Text,
  View,
  Picker
} from 'react-native'
import { Top } from './index'
import { NextFooter } from './Buttons'

export const SelectionView = ({chooseFrom, onMenu, statueHolder, onSubmit,
  onSelection, choosen, text, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {instruction} </Text>
      <Text> {text} </Text>
      <Picker
        selectedValue={choosen}
        onValueChange={onSelection} mode='dropdown'>
        { chooseFrom.map((choice) => {
          return (
            <Picker.Item label={choice.name} value={choice} key={choice.role} />
          )
        }) }
      </Picker>
      <NextFooter title='OK' onPress={onSubmit} />
    </View>
  )
}

export default SelectionView
