import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './routes/Home';
import Orders from './routes/Orders';
import Categories from './routes/Categories';
import Products from './routes/Products';
import basemanager from './service/baseservice';
import { ListItem, Icon } from 'react-native-elements';


export default function App() {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} />



      </Stack.Navigator>




    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
