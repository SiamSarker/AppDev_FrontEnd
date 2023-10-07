import React from "react";
import {View, Text, StyleSheet} from "react-native";

const App = () => {
return(
  <View style={styles.mainContainer}>
    <Text style={styles.textContainer}>
      Hello World!
    </Text>
    <Text>This is Siam Sarker</Text>
  </View>
)
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    frontWeight: "bold",
    frontSize: 16,
    color: "red",
  }
})

export default App;