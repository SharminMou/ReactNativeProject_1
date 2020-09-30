import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
const SemesterListScreen = (props)=>{
    //console.log(props);
    return(
        <View style={styles.viewStyle}>
            <View style={styles.opacityViewStyle}>
                <TouchableOpacity 
                    style={{alignSelf: "center",}}
                    onPress={function () {
                    props.navigation.navigate("Course", {sem: "5s"});
                    }}
                >
                    <Text style={styles.opacityTextStyle}>5th Semester</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opacityViewStyle}>
            <TouchableOpacity 
                    style={{alignSelf: "center",}}
                    onPress={function () {
                    props.navigation.navigate("Course", {sem: "6s"});
                    }}
                >
                    <Text style={styles.opacityTextStyle}>6th Semester</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.opacityViewStyle}>
                
            <TouchableOpacity 
                    style={{alignSelf: "center",}}
                    onPress={function () {
                    props.navigation.navigate("Course", {sem: "7s"});
                    }}
                >
                    <Text style={styles.opacityTextStyle}>7th Semester</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
    },
    opacityTextStyle:{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        marginVertical: 10,
    },
    
    opacityViewStyle:{
        backgroundColor:'#008B8B',
        marginTop: 10,
        padding: 10,
        width: 250,
        borderRadius: 30,
    },
});

export default SemesterListScreen;