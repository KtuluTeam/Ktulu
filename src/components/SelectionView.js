import React from 'react'
import {
  Text,
  View,
  Button,
  Picker
} from 'react-native'
import { Top } from './index'
import { ReadLoud, ManitouInfo } from './TextViews'

export const SelectionView = ({chooseFrom, onMenu, statueHolder, onSubmit,
  onSelection, choosen, text, instruction}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
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
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default SelectionView
