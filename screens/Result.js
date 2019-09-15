import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import axios from 'axios';

export default class Flutest extends Component {
  static navigationOptions = {
      headerTransparent: true,
      headerStyle: { borderBottomWidth: 0 }
      };
  constructor() {
    super();
    this.state = ({
        result: null
    });
  }

async componentDidMount() {
try {
  const { navigation } = this.props;
  const fever = await JSON.stringify(navigation.getParam('fever', 'null'));
  const temp =  await navigation.getParam('temp', 'null');
  const cough = await JSON.stringify(navigation.getParam('cough', 'null'));
  const response = await axios.post('http://18.189.31.11:3000/flutest', {
    "fever": fever,
  	"temp": temp,
  	"cough": cough
  })
    this.setState({result: response.data.response})
  } catch(error) {
    console.log(error);
    this.setState({result: "Something went wrong with the server"});
  }
}

  render() {
    let display;
    if (this.state.result == null) {
      display = <ActivityIndicator size="large" color="#000000" />;
    } else {
      display = <Text style={styles.resultText}>{this.state.result}</Text>
    }

    return (
      <View style={styles.container}>
          <Text style={styles.title}> Your Result:</Text>
          {display}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    marginTop: '50%',
    fontWeight: "400",
    color: "black",
    margin: '10%'
  },
  resultText: {
    fontSize: 17,
    fontWeight: "200",
    color: "black",
    margin: '5%'
  }
});
