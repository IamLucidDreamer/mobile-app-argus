import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./src/LandingScreen";
import Enroll from "./src/Portals/Student/Screens/Enroll";
import ForgotPasswordEmail from "./src/Portals/Student/Screens/ForgotPasswordEmail";
import ForgotPasswordOTP from "./src/Portals/Student/Screens/ForgotPasswordOTP";
import LoginScreen from "./src/Portals/Student/Screens/LoginScreen";
import Messages from "./src/Portals/Student/Screens/Messages";
import MyPurchases from "./src/Portals/Student/Screens/MyPurchases";
import MyTranscripts from "./src/Portals/Student/Screens/MyTranscripts";
import NewPassword from "./src/Portals/Student/Screens/NewPassword";
import Notification from "./src/Portals/Student/Screens/Notification";
import SigninScreen from "./src/Portals/Student/Screens/SigninScreen";
import StudentHome from "./src/Portals/Student/Screens/StudentHome";
import UploadDocument from "./src/Portals/Student/Screens/UploadDocument";
import UploadedDocuments from "./src/Portals/Student/Screens/UploadedDocuments";

export default function App() {
  return (
    <>
      <LandingScreen />
    </>
  );
}
