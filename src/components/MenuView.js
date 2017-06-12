import React from 'react'
import ReactPDF from 'react-pdf'
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { styles } from '../styles/styles'

let backImg = require('../../img/icons/left.png')

export const MenuView = ({onSubmit}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.backOpacity} >
        <Image source={backImg} style={styles.backImage} />
      </TouchableOpacity>
      <ReactPDF file="../../resources/handbook.pdf" />
    </View>
  )
}

export default MenuView
