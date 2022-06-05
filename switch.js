import React, { useState } from "react";
import {Button, View, Switch, StyleSheet, TouchableOpacity } from "react-native";

const Switchy = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {setIsEnabled(previousState => !previousState); console.log(isEnabled)};

  return (
    <View style={styles.container}>

{/* 
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}

      <Button title = {isEnabled.toString()} onPress = {toggleSwitch} style = {styles.beet}></Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

})

  export default Switchy;