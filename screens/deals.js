
import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";

const companies = ["ESB Networks Ltd", "Pinergy", "Prepay Power", "Electric Ireland", "EirGrid", "EcoPowe Supply","Flow gas","Glow Power","Viridian Energy Ltd","Airtricity","Energia","Huntstown Power Station","Bord Gais Energy Supply","Water Power"];
const cheapItem = ["Water Power","ESB Networks Ltd","Pinergy","Prepay Power", "Electric Ireland","EirGrid","EcoPowe Supply","Flow gas","Glow Power","Viridian Energy Ltd","Airtricity","Energia","Huntstown Power Station","Bord Gais Energy Supply",];

const WIDTH = Dimensions.get('window').width;

// const Item = ({ title }) => ( 
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>


//     </View>
//   );

const Deals = ({ navigation, route }) =>{
    // const renderItem = ({ item }) => (
    //     <Item title={ item} />

    //   );
      

      if(route.params.q1 == "green"){
        if(route.params.q2 == "prepay"){
          return (
            <View style={styles.container}>
                <FlatList 
                 
                    data={companies}
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
                 
                    data={companies}
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