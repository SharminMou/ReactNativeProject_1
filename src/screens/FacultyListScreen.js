import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
const FacultyListScreen = ()=>{
    const faculty = [
        {name: "Mr.X", key:"1" },
        {name: "Mr.A", key:"2" },
        {name: "Mr.Y", key:"3" },
        {name: "Mr.K", key:"4" },
        {name: "Mr.Z", key:"5" },
        {name: "Mr.D", key:"6" },
    ];
    return(
        <View style={styles.viewStyle}>
            <FlatList
            data = {faculty}
            renderItem = {function({item}){
                return( <View style={styles.textViewStyle}>
                            <Text style={styles.textStyle}>{item.key}. {item.name}</Text>
                        </View>
                    )
            }}
            
            />
            
        </View>


    );
};

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 100,
        backgroundColor: '#dbd8e3',
        width: 300,
        
    },
    textStyle:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
        marginVertical: 17,
    },
    textViewStyle:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#352f44',
        borderBottomWidth: 2,
        borderColor: "white",
        width: 300,

    },
    
});

export default FacultyListScreen;