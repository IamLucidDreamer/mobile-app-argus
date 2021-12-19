import { useFormik } from "formik";
import React, { useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axiosInstance from "../../../utils/axiosInstance";
import Buttons from "../Components/UniversalComponents/Buttons";
import Error from "../Components/UniversalComponents/Error";

const ForgotPasswordEmail = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "*Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      axiosInstance
        .post(`/forgot-password`, {
          email: values.email?.trim(),
          url: "https://argus-backendzedd.herokuapp.com/api",
        })
        .then((res) => {
          setSent(true);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ width: 150, height: 150, marginBottom: 10 }}
            source={require("../../../../assets/UniversalAssets/Logo512.png")}
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
            Forgot Password
          </Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter email"
              keyboardType="email-address"
              placeholderTextColor="#8890A6"
              onChangeText={handleChange("email")}
            />
          </View>
          <Error error={errors.email} />
          <View
            style={{ marginBottom: 20, width: "100%", alignItems: "center" }}
          >
            <Buttons func={handleSubmit} title={"Send"} />
          </View>
          {loading ? <ActivityIndicator size="large" color="#BA0913" /> : null}
          {sent ? (
            <Text
              style={{
                width: "90%",
                textAlign: "center",
                marginVertical: 20,
                fontSize: 20,
                color: "#BA0913",
              }}
            >
              Email with change password link has been sent to your email.
            </Text>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordEmail;

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
    width: "85%",
    height: 55,
    alignItems: "flex-start",
  },
  TextInput: {
    width: "100%",
    flex: 1,
    padding: 10,
    color: "#8890A6",
    fontSize: 20,
  },
});
