import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { patchWebProps } from "react-native-elements/dist/helpers";

const Buttons = (props) => {
  return (
    <TouchableOpacity style={styles.Btn}>
      <Text style={styles.txt}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  Btn: {
    width: "90%",
    backgroundColor: "#BA0913",
    color: "#ffffff",
    borderRadius: 10,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  txt: {
    color: "white",
    fontSize: 20,
  },
});
