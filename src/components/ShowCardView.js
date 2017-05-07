import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  Image
} from 'react-native'
import * as cardInfo from '../cards'
import { Images } from './index'

export const ShowCardView = ({number, index, cards, onSubmit, onChangeName}) => {
  let card = cards[index]
  return (
    <View>
      <Text>
        {cardInfo[card.faction][card.role].name}
      </Text>
      <Image source={Images[card.role]} style={{height: 450, width: 300}}/>
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
