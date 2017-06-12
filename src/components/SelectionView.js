import React from 'react'
import {
  Text,
  View,
  Picker
} from 'react-native'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const SelectionView = ({chooseFrom, onMenu, statueHolder, onSubmit,
  onSelection, choosen, text, instruction}) => {
  return (
    <View>
      <ReadLoud text={text} />
      <ManitouInfo text={instruction} />
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
