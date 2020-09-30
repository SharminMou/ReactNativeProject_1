import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ProfileScreen = (props)=>{
    console.log(props);
    return(
      <View style={styles.rootViewStyle}>
          <View style={{marginVertical: 20}}>
            <Image source={require('../../assets/profile-photo.jpg')} style={styles.logoStyle}/>
         </View>
         <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>Name: Sharmin Naj Mou</Text>
          <Text style={styles.textStyle}>Student ID: 170042074</Text>
          <Text style={styles.textStyle}>Room no: FHR_Utility-403</Text>
          <Text style={styles.textStyle}>Email: sharminnaj@iut-dhaka.edu</Text>
         </View>
      </View>
    );
};

const styles = StyleSheet.create({
    rootViewStyle:{
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#dbd8e3',
        width: 500,
        height: 700,
      },
      logoStyle:{
        height: 320,
        width: 200,
        resizeMode:"contain",
    },
    textStyle:{
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        color: 'white',
        borderBottomColor: "white",
        borderBottomWidth: 2,
        width: 300,
    },
    textViewStyle:{
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#352f44",
      borderRadius: 15,
    },

});

export default ProfileScreen;