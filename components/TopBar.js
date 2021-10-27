import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

//Project Logo
export default function TopBar() {
  return (
        <View>
            <Image style={styles.container} source={require('../assets/mi3.png')}/>
            <Text style={styles.text}>Position: Stunt Double</Text>
        </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    resizeMode: 'contain',
    right: 187,
  },
  text: {
      fontSize: 15,
      fontWeight: 'bold',
      left: 130,
      bottom: 20
  }
})