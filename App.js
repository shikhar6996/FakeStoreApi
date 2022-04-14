import React from 'react';
import HomeScreen from './src/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import {NavigationContainer} from '@react-navigation/native';
import ProductFullViewScreen from './src/screens/Home/productFullView';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        options={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ProductFullViewScreen"
          component={ProductFullViewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
