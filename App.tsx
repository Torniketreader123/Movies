import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from './src/navigators/TabNavigator';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
   < NavigationContainer>

   <Stack.Navigator>
    <Stack.Screen name='Tab' component={TabNavigator}/>
    <Stack.Screen name='Movidetails' component={MovieDetailsScreen}/>
    <Stack.Screen name='SeatBooking' component={SeatBookingScreen}/>

   </Stack.Navigator>
   
   </NavigationContainer>
   
  );
};

export default App;

const styles = StyleSheet.create({
  container: {}
});
