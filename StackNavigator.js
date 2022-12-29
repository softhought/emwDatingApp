import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useEffect } from 'react'
import ChatScreen from './screens/ChatScreen';
import BottomNav from './screens/dashboard/BottomNav';

import DashboardNav from './screens/dashboard/DashboardNav';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AboutPreference from './screens/preferences/AboutPreference';
import GenderInterest from './screens/preferences/GenderInterest';
import ImagePreference from './screens/preferences/ImagePreference';
import InterestPreference from './screens/preferences/InterestPreference';
import LocationPreference from './screens/preferences/LocationPreference';
import QuestionsPreference from './screens/preferences/QuestionsPreference';
import SignUpScreen from './screens/SignUpScreen';
import TestScreen from './screens/TestScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


//const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();


const StackNavigator = () => {

  const isUserLoggedIn = false;




 
  


  return (
    
    <>
      {/* <Stack.Navigator>
    {

      isUserLoggedIn ? <>
        <Stack.Screen name="BottomNav" component={BottomNav}  />
        </> : <>
      
          <Stack.Screen name="BottomNav" component={BottomNav}  />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GenderInterest" component={GenderInterest} options={{ headerShown: false }} />
          <Stack.Screen name="LocationPreference" component={LocationPreference} options={{ headerShown: false }} />
          <Stack.Screen name="AboutPreference" component={AboutPreference} options={{ headerShown: false }} />
          <Stack.Screen name="InterestPreference" component={InterestPreference} options={{ headerShown: false }} />
          <Stack.Screen name="ImagePreference" component={ImagePreference} options={{ headerShown: false }} />
          <Stack.Screen name="QuestionsPreference" component={QuestionsPreference} options={{ headerShown: false }} />
          

    
      </>

    }
    </Stack.Navigator> */}


    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GenderInterest" component={GenderInterest} options={{ headerShown: false }} />
          <Stack.Screen name="LocationPreference" component={LocationPreference} options={{ headerShown: false }} />
          <Stack.Screen name="AboutPreference" component={AboutPreference} options={{ headerShown: false }} />
          <Stack.Screen name="InterestPreference" component={InterestPreference} options={{ headerShown: false }} />
          <Stack.Screen name="ImagePreference" component={ImagePreference} options={{ headerShown: false }} />
          <Stack.Screen name="QuestionsPreference" component={QuestionsPreference} options={{ headerShown: false }} />
          <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
      </Stack.Navigator>

  </>

    
  )
}

export default StackNavigator