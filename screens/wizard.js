import React from "react";
 import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Wizard = ({ navigation }) =>{
     
    return  (

        <View style={styles.container}>
            <View  style={styles.box}>
            <Text>What do you care the most while you look for a deal?</Text>
            </View>
            <View   style={styles.btnBox} >
            <View style={styles.btnStyle}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Question', {q1: 'Green Energy'})}
                style={styles.button}>
                <Text style={styles.buttonText}>Green Energy</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.btnStyle}>
                <TouchableOpacity
                    onPress={() =>navigation.navigate('Question',{q1: 'Cheaper Price'})}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Cheaper Price</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default Wizard 

const styles = StyleSheet.create({
    container:{
        flex:1
    },
 
    box:{
     flex:2,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'
    },
   
   btnBox:{
    flexDirection:"row",
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"center",
 
   },
   btnStyle:{
 
   },
   button: {
     backgroundColor: "blue",
     padding: 40,
     borderRadius: 5,
   },
   buttonText: {
     fontSize: 20,
     color: '#fff',
   },
});