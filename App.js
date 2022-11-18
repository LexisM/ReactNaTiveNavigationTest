// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native'; 

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// In App.js in a new project

import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
import Wizard from './screens/wizard';
import Question from './screens/Question';
import Question_3 from './screens/Question_3';
import Deals from './screens/deals';




function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
            <View  style={styles.box}>
            <Text>Go to wizard</Text>
            </View>
            <View   style={styles.btnBox} >
                <View style={styles.btnStyle}>
                  <TouchableOpacity
                      onPress={() => navigation.navigate('Wizard')}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Start</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
       
        <Stack.Screen name="Wizard" component={Wizard} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Question_3" component={Question_3} />
        <Stack.Screen name="Deals" component={Deals} />
      </Stack.Navigator>
      
    </NavigationContainer>
  
  );
}

export default App;

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