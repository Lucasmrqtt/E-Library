import React, { Component } from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/search";
import Transaction from "../screens/transaction";

const Tab = createBottomTabNavigator() 

export default class TabNavigator extends Component{
  render(){
    return(
      <Tab.Navigator>
        <Tab.Screen name="Transaction" component={Transaction} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    )
  }
}


