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
  ActivityIndicator,
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
import { Formik } from "formik";
import * as Yup from "yup";
import Feather from "react-native-vector-icons/Feather";
import { errorMessage } from "../../../redux/actions/appActions";

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const LogInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });

  const login = ({ email, password }) => {
    setLoading(true);
    console.log(email, password);
    axiosInstance
      .post("/signin", { email, password })
      .then(async (res) => {
        setLoading(false);
        if (res?.data?.user?.blocked) {
          Alert.alert("Alert", "You have been blocked contact the admin!", [
            { text: "OK" },
          ]);
        } else {
          SecureStore.setItemAsync("user", JSON.stringify(res.data.user));
          SecureStore.setItemAsync("jwt", res.data.token);
          SecureStore.setItemAsync("id", res.data.user._id);
          dispatch(setUser(res.data.user));
          dispatch(setToken(res.data.token));
          dispatch(setID(res.data.user._id));
          dispatch(errorMessage({ show: true, message: res.data.message }));
          dispatch(isAuthenticated("true"));
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LogInSchema}
          onSubmit={(values) => {
            const { email, password } = values;
            console.log(values);
            login({ email, password });
          }}
        >
          {(formProps) => (
            <>
              <View style={styles.inputView}>
                <Feather name="mail" color={"#8890a6"} size={22} />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholderTextColor="#8890A6"
                  onChangeText={formProps.handleChange("email")}
                  onBlur={formProps.handleBlur("email")}
                  value={formProps.values.email}
                />
                {formProps.errors.email && formProps.touched.email ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.email}
                  </Text>
                ) : null}
              </View>
              <View style={styles.inputView}>
                <Feather name="key" color={"#8890a6"} size={22} />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  autoCapitalize="none"
                  placeholderTextColor="#8890A6"
                  secureTextEntry={true}
                  onChangeText={formProps.handleChange("password")}
                  onBlur={formProps.handleBlur("password")}
                  value={formProps.values.password}
                />
                {formProps.errors.password && formProps.touched.password ? (
                  <Text style={{ color: "#8890A6" }}>
                    {formProps.errors.password}
                  </Text>
                ) : null}
              </View>
              <View style={styles.forgotview}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPass")}
                >
                  <Text style={styles.forgottext}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={formProps.handleSubmit}
                style={styles.Btn}
              >
                {loading ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text style={styles.txt}>Log In</Text>
                )}
              </TouchableOpacity>
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
            </>
          )}
        </Formik>
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
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#8890A6",
    width: "90%",
    height: 50,
    marginBottom: 30,
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
  },
});
