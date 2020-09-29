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
                  props.navigation.navigate("ProfileScreen");
                }}
              >
                <Text style={styles.opacityTextStyle}>My Profile</Text>
              </TouchableOpacity>
            </View>
          
          <View style={styles.buttonViewStyle}>
              <Button color='#008B8B'
                title="Semester Wise Course List"
                onPress={function () {
                props.navigation.navigate("List");
                }}
              />
          </View>
          <View style={styles.buttonViewStyle}>
              <Button color='#008B8B'
                  title="List of Faculty Members"
                  onPress={function () {
                  props.navigation.navigate("FacultyList");
                  }}
              />
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
      justifyContent: "center",
    },
    logoStyle:{
      height: 300,
      width: 300,
      resizeMode:"contain",
    },
    opacityTextStyle:{
      fontSize: 15,
      color: "white",
      fontWeight: "bold",
    },
    opacityViewStyle:{
      backgroundColor:'#008B8B',
      marginTop: 10,
      padding: 10,
      width: 250,

    },
    buttonViewStyle:{
      marginTop: 10,
      width: 250,

    },
});

export default HomeScreen;