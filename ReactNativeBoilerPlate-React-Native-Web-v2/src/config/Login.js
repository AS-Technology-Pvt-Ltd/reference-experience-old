import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

class Login extends React.Component {
  common = () => {};
  render() {
    let state = {...this.state};
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {padding: 10},
  text: {fontWeight: "bold"},
});
export default Login;
