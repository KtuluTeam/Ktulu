import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { styles } from '../styles/styles'

let backImg = require('../../img/icons/left.png')
let pdfFile = loadPlainTextFile('../../resources/handbook.txt')

export const MenuView = ({onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.backOpacity} >
        <Image source={backImg} style={styles.backImage} />
      </TouchableOpacity>
      <Text>
        {pdfFile}
      </Text>
    </View>
  )
}

export default MenuView
