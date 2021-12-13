import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView,StyleSheet} from 'react-native';

import Categories from './src/page/Categories/Categories';
import Meals from  './src/page/Meals/Meals'
import MealDetail from './src/page/MealDetail/MealDetail'
const Stack = createNativeStackNavigator();


const App= ()  => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="MealsDetail" component={MealDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({


});

export default App;
