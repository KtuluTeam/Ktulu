import React from 'react'
import Pdf from 'react-native-pdf';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { styles } from '../styles/styles'

let backImg = require('../../img/icons/left.png')
let pdfFile = require('../../resources/handbook.pdf')

export const MenuView = ({onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.backOpacity} >
        <Image source={backImg} style={styles.backImage} />
      </TouchableOpacity>
      <Pdf source={pdfFile} />
    </View>
  )
}

export default MenuView
