import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
const FacultyListScreen = ()=>{
    const faculty = [{name: "Mr.X", },{name: "Mr.A", },{name: "Mr.Y", },{name: "Mr.K", },{name: "Mr.K", },];
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