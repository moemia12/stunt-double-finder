import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'
import BottomBar from './components/BottomBar'
import Swipes from './components/Swipes'

export default function App() {

  //Hooks to initialise users
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipesRef = useRef(null)

  //Fetching users from online database
  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?gender=male&results=50')
      setUsers(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
    }
  }

  //Hook to fetch users
  useEffect(() => {
    fetchUsers()
  }, [])

  //Function to like (Swipe)
  const handleLike = () => {
    console.log('YES')
    nextUser()
  }
  //Function to pass (Swipe)
  const handlePass = () => {
    console.log('NO')
    nextUser()
  }

  //Function to display next user
  const nextUser = () => {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }
  //Function to like (Button Press)
  const handleLikePress = () => {
    swipesRef.current.openLeft()
  }
  //Function to pass (Button Press)
  const handlePassPress = () => {
    swipesRef.current.openRight()
  }

  return (
    <View style={styles.container}>
      <TopBar />
      {/* Using map for displaying users from fetchUsers function */}
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})