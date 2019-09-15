import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Flutest from './screens/Flutest';
import Result from './screens/Result';
import Home from './screens/Home';


export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Result: {
    screen: Result,
  },
  Flutest: {
    screen: Flutest,
  }
});

const AppContainer = createAppContainer(AppNavigator);


