import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const Result = ({statueHolder}) => {
  let pos = ''
  if (statueHolder !== null) {
    pos = 'Posążek: [' + cards[statueHolder.faction][statueHolder.role].name + ', ' + statueHolder.name + ']'
  }
  return (
    <View>
      <Text>
        {pos}
      </Text>
    </View>
  )
}

let getText = (participant, result) => {
  if(result){
    return <Text> pariticipant.name + ": posiada posążek."</Text>
  }
  return <Text> pariticipant.name + ": nie posiada posążka"</Text>
}

export const InstructionView = ({statueHolder, instruction, participant1, participant2, searchResult1, searchResult2}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <Text> {instruction} </Text>
      <Result participant={participant1} result={searchResult1} />
      <Result participant={participant2} result={searchResult2} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default InstructionView
