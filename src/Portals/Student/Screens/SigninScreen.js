import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
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

const SigninScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });

  const signIn = () => {
    setLoading(true);
    axiosInstance
      .post(`/signup`, values)
      .then(() => {
        setLoading(false);
        axiosInstance.post("/signin", values).then((res) => {
          SecureStore.setItemAsync("jwt", res.data.token);
          SecureStore.setItemAsync("id", res.data.user._id);
          dispatch(setUser(res.data.user));
          dispatch(setToken(res.data.token));
          dispatch(setID(res.data.user._id));
          dispatch(isAuthenticated("true"));
          navigation.navigate("Student");
          resetForm();
        });
      })
      .catch((err) => {
        resetForm();
        setLoading(false);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{ width: 150, height: 150, marginBottom: 0 }}
          source={require("../../../../assets/UniversalAssets/Logo512.png")}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            const { email, password } = values;
            console.log(values);
            login({ email, password });
          }}
        >
          {(formProps) => (
            <>
              <View style={styles.inputView}>
                <Feather name="user" color={"#8890a6"} size={22} />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Name"
                  keyboardType="default"
                  placeholderTextColor="#8890A6"
                />
              </View>

              <View style={styles.inputView}>
                <Feather name="users" color={"#8890a6"} size={22} />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Last Name"
                  keyboardType="default"
                  placeholderTextColor="#8890A6"
                />
              </View>

              <View style={styles.inputView}>
                <Feather name="mail" color={"#8890a6"} size={22} />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor="#8890A6"
                />
              </View>

              <View style={styles.inputView}>
                <Feather name="key" color={"#8890a6"} size={22} />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#8890A6"
                  secureTextEntry={true}
                />
              </View>

              <View
                style={{
                  marginTop: 30,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Buttons loading={loading} title={"Sign Up"} />
              </View>
              <View style={{ flexDirection: "row", marginVertical: 7 }}>
                <Text style={styles.forgottext}>Existing user?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Loginin")}
                >
                  <Text
                    style={{
                      color: "#BA0913",
                      fontWeight: "bold",
                      paddingHorizontal: 4,
                    }}
                  >
                    Log In
                  </Text>
                </TouchableOpacity>
                <Text style={styles.forgottext}>here.</Text>
              </View>
              <View
                style={{
                  marginTop: "auto",
                  flexDirection: "row",
                  marginVertical: 8,
                  flexWrap: "wrap",
                  width: "90%",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.forgottext}>
                  By creating an account, you agree to our
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#BA0913",
                      fontWeight: "bold",
                      paddingHorizontal: 4,
                    }}
                  >
                    Terms of Service
                  </Text>
                </TouchableOpacity>
                <Text style={styles.forgottext}>and</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#BA0913",
                      fontWeight: "bold",
                      paddingHorizontal: 4,
                    }}
                  >
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

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
    height: 55,
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
});
