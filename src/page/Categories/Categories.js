import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryCard from '../../component/CategoryCard/CategoryCard'
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../component/Loading/Loading';
import Error from '../../component/Error/Error';
export default Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(Config.API_URL_CATEGORIES);
  const handlecategorySelect = id => {
    navigation.navigate('Meals', {id});
  };
  const renderCategories = ({item}) => (
     <CategoryCard category={item} onSelect={() => handlecategorySelect(item.strCategory)}/>
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <FlatList style={styles.container} data={data.categories} renderItem={renderCategories} />;
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        flex:1
    },
});
