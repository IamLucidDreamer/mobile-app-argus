import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomNav from "../Components/UniversalComponents/BottomNav";
import TopComponent from "../Components/UniversalComponents/TopComponent";

export default function StudentHome() {
  return (
    <SafeAreaView style={styles.container}>
      <TopComponent />
      <ScrollView>
        <Text>Hello World</Text>
      </ScrollView>
      <Divider width={1} />
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
    backgroundColor: "#fff",
    flex: 1,
  },
});
