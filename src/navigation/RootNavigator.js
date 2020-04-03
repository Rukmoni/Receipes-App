import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import FavoritesScreen from "./../screens/FavoritesScreen";
import FiltersScreen from "./../screens/FiltersScreen";
import MealsDetailsScreen from "./../screens/MealsDetailsScreen";
import MealsScreen from "./../screens/MealsScreen";
import TrendingScreen from "./../screens/TrendingScreen";

const BottomTab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
/**
 * CategoriesStack
 */
function CategoriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}

function TopbarNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: "#FE802B", height: 4 },
        style: {
          fontWeight: "bold",
          backgroundColor: "#FBD532",
          height: 60,
          paddingTop: 20
        }
      }}
    >
      <Tab.Screen name="Categories" component={CategoriesStack} />
      <Tab.Screen name="Trending" component={TrendingScreen} />
    </Tab.Navigator>
  );
}

/**
 * MealsStack
 */
function MealsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Meals" component={MealsScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
}

function FilterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Filters" component={FiltersScreen} />
      <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#FE802B",
          inactiveTintColor: "#6B6133",
          labelStyle: { fontSize: 12 }
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={TopbarNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          name="Meals"
          component={MealsStack}
          options={{
            tabBarLabel: "Meals",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="restaurant-menu" color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          name="Filters"
          component={FilterStack}
          options={{
            tabBarLabel: "Filters",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="filter" color={color} size={size} />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
