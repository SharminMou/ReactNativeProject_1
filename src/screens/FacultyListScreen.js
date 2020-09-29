import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
const FacultyListScreen = ()=>{
    const faculty = [
        {name: "Mr.X", key:"1" },
        {name: "Mr.A", key:"2" },
        {name: "Mr.Y", key:"3" },
        {name: "Mr.K", key:"4" },
        {name: "Mr.K", key:"5" },
    ];
    return(
        <View style={styles.viewStyle}>
            <FlatList
            data = {faculty}
            renderItem = {function({item}){
                return(<Text style={styles.textStyle}>{item.name}</Text>)
            }}
            
            />
            
        </View>


    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        color: 'blue',
        marginVertical: 30,
    },
    viewStyle:{
        borderColor: "green",
        borderWidth: 5,
    }
});

export default FacultyListScreen;