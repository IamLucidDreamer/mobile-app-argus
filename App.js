import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Enroll from "./src/Portals/Student/Screens/Enroll";
import ForgotPasswordEmail from "./src/Portals/Student/Screens/ForgotPasswordEmail";
import ForgotPasswordOTP from "./src/Portals/Student/Screens/ForgotPasswordOTP";
import LoginScreen from "./src/Portals/Student/Screens/LoginScreen";
import NewPassword from "./src/Portals/Student/Screens/NewPassword";
import SigninScreen from "./src/Portals/Student/Screens/SigninScreen";
import StudentHome from "./src/Portals/Student/Screens/StudentHome";
import UploadDocument from "./src/Portals/Student/Screens/UploadDocument";

export default function App() {
  return (
    <>
      <Enroll />
    </>
  );
}
