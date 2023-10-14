import React from "react";
import {View, Text, StyleSheet} from "react-native";
import CounterPage from "./src/pages/CounterPage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from "./src/pages/LoginPage";

const stack = createStackNavigator();

const App = () => {
return(
  
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name='Counter' component={CounterPage}></stack.Screen>
      <stack.Screen name='Login' component={LoginPage}></stack.Screen>
    </stack.Navigator>
  </NavigationContainer>

)
}

export default App;