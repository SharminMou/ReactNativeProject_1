import React from "react";
import {Text, View, StyleSheet} from "react-native";
const ListScreen = ()=>{
    const uni_1 = "IUT";
    const uni_2 = "BUET";
    const uni_3 = "CUET";
    const uni_4 = "KUET";
    const uni_5 = "RUET";
    const uni_6 = "SUST";
    const uni_7 = "AUST";
    const uni_8 = "DU";
    return(
       <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{uni_1}</Text>
            <Text style={styles.textStyle}>{uni_2}</Text>
            <Text style={styles.textStyle}>{uni_3}</Text>
            <Text style={styles.textStyle}>{uni_4}</Text>
            <Text style={styles.textStyle}>{uni_5}</Text>
            <Text style={styles.textStyle}>{uni_6}</Text>
            <Text style={styles.textStyle}>{uni_7}</Text>
            <Text style={styles.textStyle}>{uni_8}</Text>
            
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
        borderColor: "red",
        borderWidth: 5,
    }
});

export default ListScreen;