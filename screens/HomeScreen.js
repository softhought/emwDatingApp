import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
        <Text>Home Text</Text>
        <Button title="Go to Chart Screen" onPress={()=>navigation.navigate("Chat")} />
    </View>
  )
}

export default HomeScreen