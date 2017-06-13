import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView
} from 'react-native'
import * as cardInfo from '../cards'
import { ReadLoud, ManitouInfo } from './TextViews'
import { NextFooter } from './Buttons'

export const ShowCardView = ({number, index, cards, onSubmit, onChangeName}) => {
  let card = cards[index]
  return (
    <View>
      <Text>
        Podaj imię:
      </Text>
      <TextInput
        value={card.name}
        onChangeText={onChangeName} />
      <Text>
        {cardInfo[card.faction][card.role].name}
      </Text>
      <ScrollView style={{height: 330, width: 388, backgroundColor: '#ffffff', margin: 10, borderRadius: 5, left: 2}} >
        <Image source={cardInfo[card.faction][card.role].image} style={{height: 450, width: 300, left: 50}} />
      </ScrollView>
      <NextFooter title='Zatwierdź i ukryj kartę' onPress={onSubmit} />
    </View>
  )
}

export default ShowCardView
