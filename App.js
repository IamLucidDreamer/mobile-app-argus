import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/Portals/Student/Screens/LoginScreen";
import SigninScreen from "./src/Portals/Student/Screens/SigninScreen";
import StudentHome from "./src/Portals/Student/Screens/StudentHome";
import UploadDocument from "./src/Portals/Student/Screens/UploadDocument";

export default function App() {
  return (
    <>
      <SigninScreen />
    </>
  );
}
