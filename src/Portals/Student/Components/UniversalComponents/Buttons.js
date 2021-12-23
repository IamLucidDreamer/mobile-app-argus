import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { patchWebProps } from 'react-native-elements/dist/helpers';

const Buttons = (props) => {
  return (
    <TouchableOpacity onPress={() => props.func()} style={styles.Btn}>
      {props?.loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={styles.txt}>{props.title}</Text>
      )}
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
    fontSize: 19,
    fontFamily: "X",
  },
});
