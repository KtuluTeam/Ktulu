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
import { styles } from '../styles/styles'

export const ShowCardView = ({number, index, cards, onSubmit, onChangeName}) => {
  let card = cards[index]
  return (
    <View>
      <Text style={styles.setupText}>
        Podaj imię:
      </Text>
      <TextInput style={{margin: 5}}
        value={card.name}
        onChangeText={onChangeName} />
      <Text style={styles.setupText}>
        {cardInfo[card.faction][card.role].name}
      </Text>
      <ScrollView style={{height: 300, width: 388, backgroundColor: '#ffffff', margin: 10, borderRadius: 5, left: 2}} >
        <Image source={cardInfo[card.faction][card.role].image} style={{height: 450, width: 300, left: 43}} />
      </ScrollView>
      <NextFooter title='Zatwierdź i ukryj kartę' onPress={onSubmit} />
    </View>
  )
}

export default ShowCardView
