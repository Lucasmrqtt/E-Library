import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import *as Font from "expo-font"
import TabNavigator from './components/tabNavigator';

export default class App extends Component {
  constructor() {
    super()
    this.state = { fontLoaded: false }
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    })
    this.setState({
      fontLoaded: true
    })
  }

  componentDidMount() {
    this.loadFonts()
  }

  render() {
    const { fontLoaded } = this.state
    if (fontLoaded) {
      return (
        <TabNavigator />
      );
    }
    return null
  }
}
