import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";
import MealCard from '../../component/MealCard/MealCard'
import { FlatList,StyleSheet } from "react-native";
import Config from 'react-native-config';
import Loading from "../../component/Loading/Loading";
import Error from "../../component/Error/Error";
export default Meals=({route,navigation})=>{

    const{id}=route.params;
    const {data, error, loading} = useFetch(`${Config.API_URL_MEALS}${id}`);

    const handlecategorySelect = id => {
      navigation.navigate('MealsDetail', {id});
    };
    const renderMeals = ({item}) => (
       <MealCard meal={item} onSelect={() => handlecategorySelect(item.idMeal)}/>
    );
    if (loading) {
        return <Loading />;
      }
      if (error) {
        return <Error />;
      }
    return <FlatList style={styles.container} data={data.meals} renderItem={renderMeals} />;
  

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        flex:1
    },
});