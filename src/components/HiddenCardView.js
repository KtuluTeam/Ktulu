import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

export const HiddenCardView = ({number, index, onSubmit}) => {
  console.log("rendering HiddenCardView")
  let text = ''
  let buttonTitle = ''
  if (number === index){
    text = 'Oddaj urządzenie Manitou'
    buttonTitle = 'Przejdź do rozgrywki'
  }
  else{
    text = 'Podaj urządzenie kolejnemu graczowi'
    buttonTitle = 'Odkryj kartę'
  }
  return (
    <View>
    <Text>
    {text}
    </Text>
      <Button title={buttonTitle} onPress={onSubmit} />
    </View>
  );
}

export default HiddenCardView
