import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SemesterListScreen from "./src/screens/SemesterListScreen";
import FacultyListScreen from "./src/screens/FacultyListScreen"; 
import ProfileScreen from "./src/screens/ProfileScreen";
import CourseListScreen from "./src/screens/CourseListScreen";

const stack = createStackNavigator();

function App(){
  const homeHeadersStyle = { headerStyle: {backgroundColor: "#5c5470",},
                        headerTintColor: "white",
                        headerTitleStyle: {fontWeight: "bold",alignSelf: "center",},

                      };
  const headersStyle = { headerStyle: {backgroundColor: "#5c5470",},
                        headerTintColor: "white",
                        headerTitleStyle: {fontWeight: "bold"},

                      };
  return(
    <NavigationContainer>
    <stack.Navigator initialRouteName="Home">
      <stack.Screen name="Home" component={HomeScreen} options={homeHeadersStyle} />
      <stack.Screen name="Semester" component={SemesterListScreen} options={headersStyle} />
      <stack.Screen name="Faculty" component={FacultyListScreen} options={headersStyle} /> 
      <stack.Screen name="Profile" component={ProfileScreen} options={headersStyle} />
      <stack.Screen name="Course" component={CourseListScreen} options={headersStyle} />
    </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;