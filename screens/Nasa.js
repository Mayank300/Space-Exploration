import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Nasa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> DATA FROM THE API </Text>
      </View>
    );
  }
}

export default Nasa;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 30,
  },
});
