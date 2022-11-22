import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


const Question = ({ navigation, route }) =>{
     
    return  (

        <View style={styles.container}>
            <View  style={styles.box}>
                <Text>Prepay or 
                    Contract?</Text>
            </View>
            <View   style={styles.btnBox} >
                <View style={styles.btnStyle}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Question_3', {q1: route.params.q1 , q2 : 'prepay'})}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Prepay</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnStyle}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Question_3', {q1: route.params.q1 , q2 : 'contract'})}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Contract</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
export default Question

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