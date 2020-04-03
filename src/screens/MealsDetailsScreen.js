//import liraries
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,Image,ScrollView} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector,useDispatch} from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';


const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    );
  };
// create a component
const MealsDetailsScreen =props=> {
    console.log(props.route.params.mealId)
    const mealId = props.route.params.mealId;
    const mealTitle=props.route.params.mealTitle;
    console.log("mealId:"+mealId+"--mealTile::"+mealTitle);
    const availableMeals=useSelector(state=>state.meals.meals);
    /* const currentMealIsFavorite = useSelector(state=>
        state.meals.favoriteMeals.some(meal=>meal.id === mealId)
        ); */
        const selectedMeal=availableMeals.find(meal=>meal.id===mealId);
    
        return (
            <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
              <DefaultText>{selectedMeal.duration}m</DefaultText>
              <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
              <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
              <ListItem key={step}>{step}</ListItem>
            ))}
          </ScrollView>
        );
    }

// define your styles
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
      },
      details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
      },
      listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
      }
});

//make this component available to the app
export default MealsDetailsScreen;
