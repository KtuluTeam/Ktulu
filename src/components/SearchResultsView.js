import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'

export const Result = ({participant, result}) => {
  if(!result){
    return (
      <View>
        <Text>
          {participant.name}: nie posiada posążka
        </Text>
      </View>
    )
  }
  return (
    <View>
      <Text>
        {participant.name}: posiada posążek
      </Text>
      <Text>
        Jego rola to: {cards[participant.faction][participant.role].name}
      </Text>
    </View>
  )
}


export const SearchResultsView = ({statueHolder, instruction, participant1, participant2, searchResult1, searchResult2, onMenu, onSubmit}) => {
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

export default SearchResultsView
