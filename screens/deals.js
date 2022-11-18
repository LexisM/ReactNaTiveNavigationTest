import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";

const dealsItems = [{key : '1'},{key : '2'},{key : '3'},{key : '4'},{key : '5'},{key : '6'},{key : '7'},{key : '8'},]
const companies = ["ESB Networks Ltd", "Pinergy", "Prepay Power", "Electric Ireland", "EirGrid", "EcoPowe Supply","Flow gas","Glow Power","Viridian Energy Ltd","Airtricity","Energia","Huntstown Power Station","Bord Gais Energy Supply","Water Power"];
const WIDTH = Dimensions.get('window').width;

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Deals = ({ navigation, route }) =>{
    const renderItem = ({ item }) => (
        <Item title={item} />
      );
     
    return  (
        <View style={styles.container}>
            <FlatList
                data={companies}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
            
            <Text> {route.params.q1}</Text>
            <Text> {route.params.q2}</Text>
            <Text> {route.params.q3}</Text>
        </View>
    
        
    );
}
export default Deals;

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        marginTop: 8,
    },
    row:{
        justifyContent:'space-evenly',
        alignItems:"center",
 
        flexDirection: "row",
        flexWrap: "wrap",
        paddin:10
    },
    rowItem:{
        width:'33%',
        height:'25%',
        padding:3,
        backgroundColor:'blue',
        fontSize:10,
        color:'white'
    },
    itemsStyles:{
        alignItems:'center',
        justifyContent:'center',
        height:100,
        margin:2,
        height: WIDTH /  2,
        backgroundColor: '#fff',
    
    },
    item: {
    backgroundColor: '#0984e3',
    marginTop:20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
   
});