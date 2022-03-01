import React, { useEffect } from "react";
import LoginScreen from "./Portals/Student/Screens/LoginScreen";
import SigninScreen from "./Portals/Student/Screens/SigninScreen";
import StudentHome from "./Portals/Student/Screens/StudentHome";
import UploadDocument from "./Portals/Student/Screens/UploadDocument";
import { NavigationContainer } from "@react-navigation/native";
import TopComponent from "./Portals/Student/Components/UniversalComponents/TopComponent";
import LandingScreen from "./LandingScreen";
import ForgotPasswordEmail from "./Portals/Student/Screens/ForgotPasswordEmail";
import LoginTopBar from "./Portals/Student/Components/UniversalComponents/LoginTopBar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  clearStore,
  getToken,
  getUser,
  setID,
  setToken,
  setUser,
} from "./redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "./Portals/Student/Screens/DashBoard";
import UploadedDocuments from "./Portals/Student/Screens/UploadedDocuments";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Messages from "./Portals/Student/Screens/Messages";
import Notification from "./Portals/Student/Screens/Notification";
import UploadDoc from "./Portals/Student/Screens/UploadDocument";
import { Divider } from "react-native-elements/dist/divider/Divider";
import Feather from "react-native-vector-icons/Feather";
import Calendars from "./Portals/Student/Screens/Calendars";
import UserProfile from "./Portals/Student/Screens/UserProfile";
import NewPassword from "./Portals/Student/Screens/NewPassword";
import Course from "./Portals/Student/Screens/Course";
import isEmpty from "./utils/isEmpty";
import * as SecureStore from "expo-secure-store";
import Modules from "./Portals/Student/Screens/Modules";
import Chapters from "./Portals/Student/Screens/Chapters";
import ChapterContent from ".//Portals/Student/Screens/ChapterContent";
const AuthStack = createNativeStackNavigator();
const StudentStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: "right",
        drawerActiveTintColor: "#ba0913",
        drawerStyle: {
          width: "80%",
        },
      }}
      drawerContent={(props) => (
        <View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 60,
                marginBottom: 30,
              }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                }}
                source={require("../assets/UniversalAssets/Logo512.png")}
              />
              <View style={{ margin: 15 }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  Name Here
                </Text>
                <Text>User ID Here</Text>
              </View>
            </View>
          </View>
          <DrawerItemList {...props} />
          <View style={{ paddingLeft: 10 }}>
            <Divider width={1} />
          </View>
          <DrawerItem
            label="Logout"
            icon={() => (
              <Feather
                name="log-out"
                size={25}
                style={{
                  marginBottom: 3,
                  alignItems: "center",
                  color: "#ba0913",
                }}
              />
            )}
            onPress={() => {
              dispatch(clearStore());
              dispatch(setUser(null));
              dispatch(setToken(null));
              dispatch(setID(null));
            }}
          />
        </View>
      )}
    >
      <Drawer.Screen
        name="StudentHome"
        component={StudentHome}
        style={{ color: "#fff" }}
        options={{
          header: TopComponent,
          drawerLabel: "Home",
          drawerIcon: () => (
            <Feather
              name="home"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Courses"
        component={StudyMaterial}
        options={{
          headerShown: false,
          drawerLabel: "Courses",
          drawerIcon: () => (
            <Feather
              name="book-open"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={Messages}
        options={{
          header: TopComponent,
          drawerLabel: "Message",
          drawerIcon: () => (
            <Feather
              name="mail"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Calender"
        component={Calendars}
        options={{
          header: TopComponent,
          drawerLabel: "Calender",
          drawerIcon: () => (
            <Feather
              name="grid"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          header: TopComponent,
          drawerLabel: "Notification",
          drawerIcon: () => (
            <Feather
              name="bell"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Edit Profile"
        component={UserProfile}
        options={{
          header: TopComponent,
          drawerLabel: "Profile",
          drawerIcon: () => (
            <Feather
              name="user"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Change Password"
        component={NewPassword}
        options={{
          header: TopComponent,
          drawerLabel: "Change Password",
          drawerIcon: () => (
            <Feather
              name="key"
              size={25}
              style={{
                marginBottom: 3,
                alignItems: "center",
                color: "#ba0913",
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const StudyMaterial = () => {
  return (
    <StudentStack.Navigator initialRouteName="Course">
      <StudentStack.Screen
        name="Course"
        component={Course}
        options={{ header: LoginTopBar }}
      />
      <StudentStack.Screen
        name="Module"
        component={Modules}
        options={{ header: LoginTopBar }}
      />
      <StudentStack.Screen
        name="Chapters"
        component={Chapters}
        options={{ header: LoginTopBar }}
      />
      <StudentStack.Screen
        name="ChapterContent"
        component={ChapterContent}
        options={{ header: LoginTopBar }}
      />
    </StudentStack.Navigator>
  );
};

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  const authenticated = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      {!isEmpty(user) && !isEmpty(authenticated) ? (
        <>
          <DrawerNav />
        </>
      ) : (
        <AuthStack.Navigator initialRouteName="LandingScreen">
          <AuthStack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <AuthStack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ header: LoginTopBar }}
          />
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ header: LoginTopBar }}
          />
          <AuthStack.Screen
            name="ForgotPass"
            component={ForgotPasswordEmail}
            options={{ header: LoginTopBar }}
          />
          <AuthStack.Screen
            name="Student"
            component={DrawerNav}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
