import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage } from "../../../../redux/actions/appActions";

const Error = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.app);

  if (error.error.show === true) {
    setTimeout(() => {
      dispatch(errorMessage(false));
    }, 3000);
  }

  return (
    <>
      {error.error.show === true ? (
        <View style={styles.box}>
          <Text style={styles.text1}>{error.error.message}</Text>
        </View>
      ) : null}
    </>
  );
};

export default Error;

const styles = StyleSheet.create({
  box: {
    width: "95%",
    maxHeight: 400,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : "5",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    position: "absolute",
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 15,
  },
  text1: {
    fontSize: 18,
    color: "#808080",
  },
});
