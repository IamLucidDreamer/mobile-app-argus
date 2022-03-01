import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Buttons from "./Portals/Student/Components/UniversalComponents/Buttons";
import * as SecureStore from "expo-secure-store";
import isEmpty from "./utils/isEmpty";
import { setID, setToken, setUser } from "./redux/actions/authActions";

export default function LandingScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    SecureStore.getItemAsync("jwt").then((token) => {
      dispatch(setToken(token));
      SecureStore.getItemAsync("user").then((res) => {
        if (!isEmpty(token)) {
          const user = JSON.parse(res);
          dispatch(setUser(user));
          SecureStore.getItemAsync("id").then((res) => {
            dispatch(setID(res));
            console.log(res);
          });
        }
      });
    });
  }, []);

  return (
    <>
      {auth.token !== null && auth.isAuth === "loading" ? (
        <View style={[styles.container, { justifyContent: "center" }]}>
          <ActivityIndicator
            size="large"
            style={{ transform: [{ scale: 2 }] }}
            color="#BA0913"
          />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <Image
            style={{ width: 240, height: 240, flex: 1 }}
            resizeMode={"contain"}
            source={require("../assets/UniversalAssets/Logo512.png")}
          />
          <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
            <Buttons
              func={() => navigation.navigate("Login")}
              title={"Client Portal"}
            />
            <Buttons
              func={() => navigation.navigate("Login")}
              title={"Student Portal"}
            />
            <Buttons
              func={() => navigation.navigate("Login")}
              title={"Employee Portal"}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
