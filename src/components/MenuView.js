import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import { styles } from '../styles/styles'
import { handbookContent } from '../../resources/handbook'

let backImg = require('../../img/icons/left.png')

export const MenuView = ({onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.backOpacity} >
        <Image source={backImg} style={styles.backImage} />
      </TouchableOpacity>
      <ScrollView>
        <Text>
          {handbookContent}
        </Text>
      </ScrollView>
    </View>
  )
}

export default MenuView
