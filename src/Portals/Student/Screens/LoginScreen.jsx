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
  ScrollView,
} from "react-native";
import axiosInstance from "../../../utils/axiosInstance";
import Buttons from "../Components/UniversalComponents/Buttons";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import {
  getToken,
  isAuthenticated,
  setID,
  setToken,
  setUser,
} from "../../../redux/actions/authActions";
import { Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const login = () => {
    setLoading(true);
    axiosInstance
      .post("/signin", form)
      .then(async (res) => {
        setLoading(false);
        if (res?.data?.user?.blocked) {
          Alert.alert("Alert", "You have been blocked contact the admin!!!!", [
            { text: "OK" },
          ]);
        } else {
          console.log(res.data);
          SecureStore.setItemAsync("jwt", res.data.token);
          SecureStore.setItemAsync("id", res.data.user._id);
          dispatch(setUser(res.data.user));
          dispatch(setToken(res.data.token));
          dispatch(setID(res.data.user._id));
          dispatch(isAuthenticated("true"));
          navigation.navigate("Student");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <ScrollView>
      <View style={[styles.container, { position: "relative" }]}>
        <Image
          style={{ width: 150, height: 150, marginTop: 20, marginBottom: 30 }}
          source={require("../../../../assets/UniversalAssets/Logo512.png")}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#8890A6"
            onChangeText={(email) => setForm({ ...form, email })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="#8890A6"
            secureTextEntry={true}
            onChangeText={(password) => setForm({ ...form, password })}
          />
        </View>
        <View style={styles.forgotview}>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
            <Text style={styles.forgottext}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Buttons func={login} loading={loading} title={"Log In"} />
        <Text style={styles.forgottext}>OR</Text>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.forgottext}>New user?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text
              style={{
                color: "#BA0913",
                fontWeight: "bold",
                marginHorizontal: 4,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={styles.forgottext}>here.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4F5F9",
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
  forgotview: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgottext: {
    color: "#68696D",
    textAlign: "center",
  },
});
