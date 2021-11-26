import React, { useEffect } from 'react';
import LoginScreen from './Portals/Student/Screens/LoginScreen';
import SigninScreen from './Portals/Student/Screens/SigninScreen';
import StudentHome from './Portals/Student/Screens/StudentHome';
import UploadDocument from './Portals/Student/Screens/UploadDocument';
import { NavigationContainer } from '@react-navigation/native';
import TopComponent from './Portals/Student/Components/UniversalComponents/TopComponent';
import LandingScreen from './LandingScreen';
import ForgotPasswordEmail from './Portals/Student/Screens/ForgotPasswordEmail';
import LoginTopBar from './Portals/Student/Components/UniversalComponents/LoginTopBar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getToken, getUser } from './redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import Camera from './Portals/Student/Screens/Camera';
import ReactNativeCamera from './Portals/Student/Screens/Camera';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getToken());
    dispatch(getUser());
  }, [dispatch]);

  return (
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
          name="Login"
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
        <Stack.Screen
          name="Camera"
          component={ReactNativeCamera}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
