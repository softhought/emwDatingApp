import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';





const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  


    return (
      
      <PaperProvider >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
    
    );
 

}

