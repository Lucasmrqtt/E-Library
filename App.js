import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './components/tabNavigator';

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    );
  }
}
