import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ProfileScreen = (props)=>{
    console.log(props);
    return(
      <View style={styles.rootViewStyle}>
          <View style={{marginVertical: 20}}>
            <Image source={require('../../assets/profile-photo.jpg')} style={styles.logoStyle}/>
         </View>
         <View style={{marginVertical: 18,alignItems:"center"}}>
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
        justifyContent: "center",
      },
    textStyle:{
        fontSize: 20,
        color: 'black',
        marginVertical: 10,
    },
    logoStyle:{
        height: 200,
        width: 200,
        resizeMode:"contain",
      },

});

export default ProfileScreen;