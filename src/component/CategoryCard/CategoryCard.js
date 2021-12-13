import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';


export default CategoryCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.name}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'white',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 5,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 20,
    textAlignVertical: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
