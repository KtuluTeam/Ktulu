import React from 'react'
import {
  Text,
  View,
  Button,
  Picker
} from 'react-native'
import { Top } from './index'

export const ChoiceView = ({chooseFrom, onMenu, statueHolder, onSubmit, onSelection, choosen, text}) => {
  console.log("rendering ChoiceView")
    console.log(statueHolder)
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Text> {text} </Text>
    <Picker
    selectedValue={choosen}
    onValueChange={onSelection} mode="dropdown">
    { chooseFrom.map((choice) => {
        return (
            <Picker.Item label={choice.name} value={choice} key={choice.role}/>
        )
      }) }
      </Picker>
    <Button title="OK"  onPress={onSubmit} />
    </View>
  );
}

export default ChoiceView
