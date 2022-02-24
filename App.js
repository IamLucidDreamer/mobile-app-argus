import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigation from "./src/Navigation";
import Error from "./src/Portals/Student/Components/UniversalComponents/Error";

export default function App() {
  const [isLoaded] = useFonts({
    "Poppins-ExtraLight": require("./assets/Fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/Fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-Regular": require("./assets/Fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/Fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/Fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/Fonts/Poppins/Poppins-Bold.ttf"),
  });

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Error />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
    backgroundColor: "#fff",
    flex: 1,
  },
});
