import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import SettingsAbout from './settings/SettingsAbout';
import DashboardAbout from './home/DashboardAbout';
import Dashboard from './home/Dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatHome from './chat/ChatHome';
import OverviewHome from './overview/OverviewHome';

/*
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Home screen</Text>
      <Text>test</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Chat screen</Text>
      
    </View>
  );
}
*/

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false
      }}>

      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{ title: 'Home Page' }} />

      {/* <Stack.Screen
          name="Details"
          component={DashboardAbout}
          options={{ title: 'Details Page' }} /> */}

    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Chat"
        component={ChatHome}
        options={{ title: 'Chat Page' }} />

    </Stack.Navigator>
  );
}


function OverviewStack() {
  return (
    <Stack.Navigator
      initialRouteName="Overview"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Overview"
        component={OverviewHome}
        options={{ title: 'Overview Page' }} />

    </Stack.Navigator>
  );
}


function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsAbout}
        options={{ title: 'Setting Page' }} />

    </Stack.Navigator>
  );
}




const BottomNav = () => {

  return (
    <>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="AboutScreen" component={ChatScreen} />
        <Tab.Screen name="SettingsScreen" component={ChatScreen} />
      </Tab.Navigator>
 */}



      <Tab.Navigator
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarShowLabel: false,
            tabBarAccessibilityLabel: 'Home',
            tabBarActiveTintColor: 'red',
            headerShown: false,


            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
            ),

          }} />
        <Tab.Screen
          name="OverviewStack"
          component={OverviewStack}
          options={{
            tabBarLabel: 'Overview',
            tabBarShowLabel: false,
            tabBarAccessibilityLabel: 'Overview',
            tabBarActiveTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),

          }} />

        <Tab.Screen
          name="ChatStack"
          component={ChatStack}
          options={{
            tabBarLabel: 'Chat',
            tabBarShowLabel: false,
            tabBarAccessibilityLabel: 'Chat',
            tabBarActiveTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="message-text" color={color} size={size} />
            ),

          }} />

        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarShowLabel: false,
            tabBarAccessibilityLabel: 'Settings',
            tabBarActiveTintColor: 'red',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-cog" color={color} size={size} />
            ),

          }} />

      </Tab.Navigator>



    </>

  );
}

export default BottomNav