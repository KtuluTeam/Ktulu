import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native'
import * as cardInfo from '../cards'

export const ShowCardView = ({number, index, cards, onSubmit, onChangeName}) => {
  let card = cards[index]
  return (
    <View>
      <Text>
        {cardInfo[card.faction][card.role].name}
      </Text>
      <Text>
        Podaj imię:
      </Text>
      <TextInput
        value={card.name}
        onChangeText={onChangeName} />
      <Button title="Zatwierdź i ukryj kartę"  onPress={onSubmit} />
    </View>
  );
}

export default ShowCardView
