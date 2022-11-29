
import React from "react";
import { StyleSheet, View, Text,Image, FlatList, Dimensions } from "react-native";

const companies = [
  {"name":"ESB Networks Ltd","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Pinergy","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Prepay Power","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Electric Ireland","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"EirGrid","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"EcoPowe Supply","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Flow gas","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Glow Power","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Viridian Energy Ltd","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Airtricity","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Energia","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Huntstown Power Station","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Bord Gais Energy Supply","img":"https://via.placeholder.com/350x150.jpg"},
  {"name":"Water Power","img":"https://via.placeholder.com/350x150.jpg"}];
const cheapItem = ["Water Power","ESB Networks Ltd","Pinergy","Prepay Power", "Electric Ireland","EirGrid","EcoPowe Supply","Flow gas","Glow Power","Viridian Energy Ltd","Airtricity","Energia","Huntstown Power Station","Bord Gais Energy Supply",];

const WIDTH = Dimensions.get('window').width;


const Deals = ({ navigation, route }) =>{
  
      

      if(route.params.q1 == "green"){
        if(route.params.q2 == "prepay"){
          return (
            <View style={styles.container}>
                <FlatList 
                 
                    data={companies}
                    keyExtractor={(item) =>item.name}
                    renderItem={({ item }) => {if((item.name === "Pinergy" || item.name === "Prepay Power") && item.name !==route.params.q3){
                      return(
                      <View style={styles.item}>
                       <Text style={styles.title}>{item.name}</Text>
                       <Image  style={styles.logo} source={{uri:item.img}}></Image>
                      </View>
                      )
                    }
                    }
                  }
                />
                        
                <Text> {route.params.q1}</Text>
                <Text> {route.params.q2}</Text>
                <Text> {route.params.q3}</Text>
            </View>
        
            
        )
        }else{
          return  (
            <View style={styles.container}>
                <FlatList 
                 
                    data={companies}
                    keyExtractor={(item) =>item.name}
                    renderItem={({ item }) => {if(item.name !== "Pinergy" && item.name !== "Prepay Power" && item.name !==route.params.q3){
                      return(
                      <View style={styles.item}>
                       <Text style={styles.title}>{item.name}</Text>
                       <Image style={styles.logo} source={{uri:item.img}}></Image>
                      </View>
                      )
                    }
                    }
                  }
                />
                        
                <Text> {route.params.q1}</Text>
                <Text> {route.params.q2}</Text>
                <Text> {route.params.q3}</Text>
            </View>
        
            
        )
        }
       
      }else if (route.params.q1 == "cheap"){
         if(route.params.q2 == "prepay"){
          
        return  (
        <View style={styles.container}>
              <FlatList 
               
                  data={cheapItem}
                  keyExtractor={(item) =>item}
                    renderItem={({ item }) => {if((item === "Pinergy" || item === "Prepay Power") && item !==route.params.q3){
                    return(
                    <View style={styles.item}>
                     <Text style={styles.title}>{item}</Text>
                    </View>
                    )
                  }
                  }
                }
              />
                      
              <Text> {route.params.q1}</Text>
              <Text> {route.params.q2}</Text>
              <Text> {route.params.q3}</Text>
          </View>
        )
      }else{
        return  (
          <View style={styles.container}>
              <FlatList 
               
                  data={cheapItem}
                  keyExtractor={(item) =>item}
                  renderItem={({ item }) => {if(item !== "Pinergy" && item !== "Prepay Power" && item !==route.params.q3){
                    return(
                    <View style={styles.item}>
                     <Text style={styles.title}>{item}</Text>
                    </View>
                    )
                  }
                  }
                }
              />
                      
              <Text> {route.params.q1}</Text>
              <Text> {route.params.q2}</Text>
              <Text> {route.params.q3}</Text>
          </View>
      
          
      )
      }
      
    }
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
    item: {
      flexDirection: "row",
      backgroundColor: '#0984e3',
      marginTop:20,
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent:'space-between'
  },
  title: {
    flex:1,
    fontSize: 32,
  },
  logo:{
    width:50,
    height:50,
    alignSelf:'flex-end'
  }
   
});