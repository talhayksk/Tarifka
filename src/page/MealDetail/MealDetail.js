import React, { useState } from "react";
import {View,Image,StyleSheet,Text,Dimensions,ScrollView,TouchableOpacity} from  'react-native'
import Config from "react-native-config";
import useFetch from '../../hooks/useFetch/useFetch'
const deviceSize = Dimensions.get('window');
export default MealDetail=({route})=>{
    const {id}=route.params;
   const {data, error, loading}=useFetch(`${Config.API_URL_MEALSDETAIL}${id}`);
 //  console.log(data.meals.strMeal);


    return(
        <ScrollView>
              <View style={styles.container}>
                <Image style={styles.image} source={{uri:data?.meals[0]?.strMealThumb}} />
             
                <View style={styles.body_container}>
                <Text style={styles.title}>{data?.meals[0]?.strMeal}</Text>
                <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL(data.meals[0].strYoutube)}>
                    <Text style={styles.button_text} >Youtube'da İzle</Text>
                </TouchableOpacity>
                <Text style={styles.desc}>{data?.meals[0]?.strInstructions}</Text> 
           

                </View>
        </View>
        </ScrollView>
      
      
    )
}
const styles=StyleSheet.create({
    container:{},
    image:{
        width:deviceSize.width,
        height:deviceSize.height/2.5,
    },
    title:{
        fontSize:28,
        fontWeight:"100",
        fontStyle:"normal",
        fontWeight:"bold",
        padding:5,

    },
    desc:{
padding:5,
fontSize:16,

    },
    button: {
        alignSelf:"center",
        backgroundColor:"#d50000",
        color:'white',
        width:deviceSize.width/1.5,
        height:50,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        margin:5,
    },
 
})