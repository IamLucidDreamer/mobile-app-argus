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
import Calendar from "./Portals/Student/Screens/Calendar";
import {
  clearStore,
  getToken,
  getUser,
  setID,
  setToken,
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
const AuthStack = createNativeStackNavigator();
const StudentStack = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Icon = (props) => (
  <View style={{ alignItems: "center" }}>
    <Feather
      name={props.icon}
      size={props.focused ? 30 : 20}
      style={{
        marginBottom: 3,
        alignItems: "center",
        color: props.focused ? "#ba0913" : "#8890A6",
      }}
    />
    <Text
      style={{ color: props.focused ? "#ba0913" : "#8890A6", fontSize: 13 }}
    >
      {props.text}
    </Text>
  </View>
);

const StudentRoute = () => {
  return (
    <StudentStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        drawerPosition: "right",
        drawerActiveTintColor: "#BA0913",
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: "#",
          flexDirection: "row",
          padding: 10,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 2,
        },
      }}
    >
      <StudentStack.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon icon="calendar" text="Calender" focused={focused} />
            </View>
          ),
        }}
        name="Calender"
        component={Calendar}
      />
      <StudentStack.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon icon="home" text="Home" focused={focused} />
            </View>
          ),
        }}
        name="HomePage"
        component={StudentHome}
      />
      <StudentStack.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon icon="user" text="Profile" focused={focused} />
            </View>
          ),
        }}
        name="Contact"
        component={Messages}
      />
    </StudentStack.Navigator>
  );
};

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
              dispatch(setToken(null));
              dispatch(setID(null));
              navigation.navigate("LandingScreen");
            }}
          />
        </View>
      )}
    >
      <Drawer.Screen
        name="StudentHome"
        component={StudentRoute}
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
        name="Message"
        component={StudentRoute}
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
        name="Notification"
        component={StudentRoute}
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
        component={StudentRoute}
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
        component={StudentRoute}
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
      {/* TODO: Add other routes */}
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getToken());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Navigation;
