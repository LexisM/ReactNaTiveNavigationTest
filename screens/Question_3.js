import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


const Question_3 = ({ navigation, route }) =>{
     
    return  (

        <View style={styles.container}>
            <View  style={styles.box}>
            <Text> {route.params.key}</Text>
            <Text> {route.params.q2}</Text>
            </View>
        </View>
    );
}
export default Question_3

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
   
  
});