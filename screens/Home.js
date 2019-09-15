import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Home extends React.Component {
  static navigationOptions = {
      headerTransparent: true,
      headerStyle: { borderBottomWidth: 0 }
      };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bodytext}>Let's begin your Flu Test</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Flutest')}
              >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodytext: {
    fontSize: 20
  },
  choiceText: {
    fontSize: 20,
    fontWeight: "200",
    color: "black",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#349beb',
    padding: 10,
    borderRadius: 7,
    margin: 50,
    width: '25%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});
