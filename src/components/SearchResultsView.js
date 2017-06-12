import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'
import * as cards from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'

export const Result = ({participant, result}) => {
  if (!result) {
    return (
      <View>
        <ReadLoud text={participant.name + ': nie posiada posążka'} />
      </View>
    )
  }
  return (
    <View>
      <ReadLoud text={participant.name + ': posiada posążek\nJego rola to: ' +
      cards[participant.faction][participant.role].name} />
    </View>
  )
}

export const SearchResultsView = ({statueHolder, instruction, participant1, participant2, searchResult1, searchResult2, onMenu, onSubmit}) => {
  return (
    <View>
      <Top statueHolder={statueHolder} onMenu={onMenu} />
      <ManitouInfo text={instruction} />
      <Result participant={participant1} result={searchResult1} />
      <Result participant={participant2} result={searchResult2} />
      <Button title='OK' onPress={onSubmit} />
    </View>
  )
}

export default SearchResultsView
