import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/Portals/Student/Screens/LoginScreen";
import SigninScreen from "./src/Portals/Student/Screens/SigninScreen";
import StudentHome from "./src/Portals/Student/Screens/StudentHome";
import UploadDocument from "./src/Portals/Student/Screens/UploadDocument";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopComponent from "./src/Portals/Student/Components/UniversalComponents/TopComponent";
import LandingScreen from "./src/LandingScreen";
import ForgotPasswordEmail from "./src/Portals/Student/Screens/ForgotPasswordEmail";
import LoginTopBar from "./src/Portals/Student/Components/UniversalComponents/LoginTopBar";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "Poppins-ExtraLight": require("./assets/Fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/Fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-Regular": require("./assets/Fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/Fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/Fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/Fonts/Poppins/Poppins-Bold.ttf"),
  });

  // if (!isLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ header: LoginTopBar }}
          />
          <Stack.Screen
            name="Loginin"
            component={LoginScreen}
            options={{ header: LoginTopBar }}
          />
          <Stack.Screen
            name="ForgotPass"
            component={ForgotPasswordEmail}
            options={{ header: LoginTopBar }}
          />
          <Stack.Screen
            name="StudentHome"
            component={StudentHome}
            options={{ header: TopComponent }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : "0",
    backgroundColor: "#fff",
    flex: 1,
  },
});
