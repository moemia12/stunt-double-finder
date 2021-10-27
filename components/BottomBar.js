import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

//LIKE OR PASS BUTTONS - Function props found in app.js
export default function BottomBar({ handleLikePress, handlePassPress }) {
  return (
    <View style={styles.container}>
      <View />
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
          {/* PASS */}
        <FontAwesome name="times" size={27} color="#F06795"></FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          {/* LIKE */}
        <FontAwesome name="check" size={27} color="#64EDCC" onPress={handleLikePress}></FontAwesome>
      </TouchableOpacity>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
})