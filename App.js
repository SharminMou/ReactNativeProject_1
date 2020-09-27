import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="List" component={ListScreen} />
    </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;