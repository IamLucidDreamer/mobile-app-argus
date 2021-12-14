import React, { useEffect, useState } from 'react';
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
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';
import BottomNav from '../Components/UniversalComponents/BottomNav';
import TopComponent from '../Components/UniversalComponents/TopComponent';
import DashBoard from './DashBoard';
import Enroll from './Enroll';
import Messages from './Messages';
import MyPurchases from './MyPurchases';
import MyTranscripts from './MyTranscripts';
import Notification from './Notification';
import SigninScreen from './SigninScreen';
import UploadDoc from './UploadDocument';
import UploadedDocuments from './UploadedDocuments';
import { useDispatch } from 'react-redux';
import { getToken } from '../../../redux/actions/authActions';
import { useSelector } from 'react-redux';
import {
  getAllCourses,
  getDocs,
  getProgress,
} from '../../../redux/actions/studentActions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const HomeTab = createMaterialTopTabNavigator();

export default function StudentHome({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocs());
    dispatch(getProgress());
    dispatch(getAllCourses());
  }, []);

  const user = useSelector((state) => state.auth.user);

  return (
    <View style={{ height: '100%' }}>
      <HomeTab.Navigator
        initialRouteName="DashBoard"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarBounces: false,
          tabBarActiveTintColor: '#ba0913',
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: {
            backgroundColor: '#ba0913',
            height: 3,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarPressColor: '#ba0913',
        }}
      >
        <HomeTab.Screen name="DashBoard" component={DashBoard} />
        <HomeTab.Screen name="Enroll" component={Enroll} />
        <HomeTab.Screen name="My Purchases" component={MyPurchases} />
        <HomeTab.Screen name="Transcripts" component={MyTranscripts} />
        <HomeTab.Screen name="Messages" component={Messages} />
        <HomeTab.Screen name="Notifications" component={Notification} />
        <HomeTab.Screen name="New Upload" component={UploadDoc} />
        <HomeTab.Screen name="Uploaded" component={UploadedDocuments} />
      </HomeTab.Navigator>
    </View>
  );
}
