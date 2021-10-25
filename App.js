import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StudentHome from "./src/Portals/Student/Screens/StudentHome";

export default function App() {
  return (
    <View>
      <StudentHome />
    </View>
  );
}
