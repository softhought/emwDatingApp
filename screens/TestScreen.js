import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const TestScreen = () =>  {
  return (
    <View style={styles.container}>
      <View style={styles.usernameStack}>
        <TextInput placeholder="" style={styles.username}></TextInput>
        <Icon name="ios-person" style={styles.icon}></Icon>
      </View>
      <Text style={styles.username3}>Username</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      width: 299,
      height: 65,
     flex:1,
     
    },
    username: {
      top: 0,
      position: "absolute",
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 47,
      width: 299,
      borderWidth: 1,
      borderColor: "rgba(227,227,227,1)",
      borderRadius: 6,
      left: 0
    },
    icon: {
      top: 9,
      left: 7,
      position: "absolute",
      color: "rgba(213,213,213,1)",
      fontSize: 25
    },
    usernameStack: {
      width: 299,
      height: 47,
      marginTop: 19
    },
    username3: {
      fontFamily: "roboto-regular",
      color: "rgba(136,136,136,1)",
      fontSize: 12,
      marginTop: -66
    }
  });

export default TestScreen;
