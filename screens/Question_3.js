import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import SelectDropdown from 'react-native-select-dropdown' ; 

const companies = ["ESB Networks Ltd", "Pinergy", "Prepay Power", "Electric Ireland", "EirGrid", "EcoPowe Supply","Flow gas","Glow Power","Viridian Energy Ltd","Airtricity","Energia","Huntstown Power Station","Bord Gais Energy Supply","Water Power"];
const Question_3 = ({ navigation, route }) =>{
     
    return  (

        <View style={styles.container}>
          

            <View  style={styles.box}>
            <Text>Select previous supplier?</Text>
            </View>
            <View   style={styles.btnBox} >
            
                <View style={styles.btnBox}>
                    <SelectDropdown  
                        data={companies}
                       
                        
                        onSelect={(selectedItem, index) => {
                            navigation.navigate('Deals', {q1: route.params.q1 , q2 : route.params.q2, q3: selectedItem}) ;
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                       
                        buttonStyle={styles.dropdown2BtnStyle}
                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                      
                        dropdownStyle={styles.dropdown2DropdownStyle}
                        rowStyle={styles.dropdown2RowStyle}
                        rowTextStyle={styles.dropdown2RowTxtStyle}
                        
                      
                    />
                </View>
            </View>
        </View>

        
    );
}
export default Question_3

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
   dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: 'blue',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: 'darkblue', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
   
});