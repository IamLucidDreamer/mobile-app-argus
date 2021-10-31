import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Buttons from "../Components/UniversalComponents/Buttons";

const ForgotPasswordOTP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 150, height: 150, marginTop: 50, marginBottom: 30 }}
        source={require("../../../../assets/UniversalAssets/Logo.png")}
      />
      <Text
        style={{
          color: "#68696D",
          fontSize: 30,
          marginTop: 10,
          marginBottom: 20,
          fontWeight: "bold",
        }}
      >
        Verify Identity
      </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="OTP"
          keyboardType="number-pad"
          placeholderTextColor="#8890A6"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Buttons title={"Verify OTP"} />
      <Text
        style={{
          width: "90%",
          textAlign: "center",
          marginVertical: 20,
          fontSize: 15,
          color: "#68696D",
        }}
      >
        Enter the received OTP sent to your registered Email Address.
      </Text>
    </SafeAreaView>
  );
};

export default ForgotPasswordOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4F5F9",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputView: {
    borderBottomWidth: 1,
    borderColor: "#8890A6",
    width: "90%",
    height: 55,
    marginBottom: 30,
    alignItems: "flex-start",
  },
  TextInput: {
    width: "100%",
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color: "#8890A6",
    fontSize: 20,
  },
});
