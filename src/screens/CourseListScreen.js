import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CourseListScreen = (props)=>{
    //console.log(props);
    let sem = props.route.params.sem;
    //console.log(sem);
    const [courseList, setCourseList] = useState([])
    const [rendering, setRendering] = useState(true)
     if(rendering){
        if (sem == "5s")
        {
            setCourseList(courses => [
                ...courses,
                {name: "CSE 4501", key:"1" },
                {name: "CSE 4502", key:"2" },
                {name: "SWE 4537", key:"3" },
                {name: "CSE 4508", key:"4" },
                {name: "MATH 4543", key:"5" },
            ]);
            setRendering(false);
        }
        else if (sem == "6s")
        {
            setCourseList(courses => [
                ...courses,
                {name: "CSE 4601", key:"1" },
                {name: "CSE 4602", key:"2" },
                {name: "SWE 4637", key:"3" },
                {name: "CSE 4608", key:"4" },
                {name: "MATH 4643", key:"5" },
            ]);
            setRendering(false);
        }
        else if (sem == "7s")
        {
            setCourseList(courses => [
                ...courses,
                {name: "CSE 4701", key:"1" },
                {name: "CSE 4702", key:"2" },
                {name: "SWE 4737", key:"3" },
                {name: "CSE 4708", key:"4" },
                {name: "MATH 4743", key:"5" },
            ]);
            setRendering(false);

        }
    }
    console.log(courseList);
        return (
            <View style={styles.viewStyle}>
                <FlatList 
                    data = {courseList}
                    renderItem = {courseItem =>(
                        <View style={styles.textViewStyle}>
                            <Text style={styles.textStyle}>{courseItem.item.name}</Text>
                        </View>
                    )}
                />
            </View>
          );
    }

  const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 100,
        backgroundColor: '#008B8B',
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
        borderBottomWidth: 2,
        borderColor: "white",
        width: 300,

    },
    
});

export default CourseListScreen;
