import React from "react";
import {Text, StyleSheet, Button, View, Image, TouchableOpacity} from "react-native";

const HomeScreen = (props)=>{
    console.log(props);
    return(
      <View style={styles.rootViewStyle}>
         {/* <Text style={styles.textStyle}>Home</Text> */}
         <View style={{marginVertical: 20}}>
            <Image source={require('../../assets/Islamic_University_of_Technology_logo.png')} style={styles.logoStyle}/>
         </View>
         <View style={{marginVertical: 18,alignItems:"center"}}>
          <Text style={styles.textStyle}>Department of CSE</Text>
          <Text style={styles.textStyle}>Program: SWE</Text>
         </View>
         
          <View style={styles.opacityViewStyle}>
            <TouchableOpacity 
              style={{alignSelf: "center",}}
              onPress={function () {
                  props.navigation.navigate("Profile");
                }}
              >
                <Text style={styles.opacityTextStyle}>My Profile</Text>
              </TouchableOpacity>
          </View>
          
          <View style={styles.opacityViewStyle}>
            <TouchableOpacity 
              style={{alignSelf: "center",}}
              onPress={function () {
                  props.navigation.navigate("Semester");
                }}
              >
                <Text style={styles.opacityTextStyle}>Semester Wise Course List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.opacityViewStyle}>
            <TouchableOpacity 
              style={{alignSelf: "center",}}
              onPress={function () {
                  props.navigation.navigate("Faculty");
                }}
              >
                <Text style={styles.opacityTextStyle}>List of Faculty Members</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
    },
    rootViewStyle:{
      alignItems: "center",
      backgroundColor: '#dbd8e3',
      height: 700,
    },
    logoStyle:{
      height: 200,
      width: 200,
      resizeMode:"contain",
    },
    opacityTextStyle:{
      fontSize: 15,
      color: "white",
      fontWeight: "bold",
    },
    opacityViewStyle:{
      backgroundColor:'#2a2438',
      marginTop: 10,
      padding: 10,
      width: 250,
      borderRadius: 30,

    },
});

export default HomeScreen;