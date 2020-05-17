import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/pages/MainScreen';
import PayScreen from './src/pages/PayScreen';
import Transfer from './src/pages/Transfer';
import Recharge from './src/pages/Recharge';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5bb332'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#fff',
        }}>

        <Stack.Screen 
          name='MainScreen' 
          component={MainScreen} 
          options={{title:'Voltar' ,headerShown: false}} 
        />

        <Stack.Screen 
          name='PayScreen' 
          component={PayScreen}
          options={{title:'Pagar'}}
        />

        <Stack.Screen
          name='Transfer'
          component={Transfer}
          options={{title:'Transferir'}}
        />

        <Stack.Screen
          name='Recharge'
          component={Recharge}
          options={{title:'Recarga'}}
        />
      </Stack.Navigator>    
    </NavigationContainer>
  );
}