import React, { useState } from 'react';
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
import Enroll from './Enroll';
import SigninScreen from './SigninScreen';

export default function StudentHome() {
  const windowWidth = Dimensions.get('window').width / 2;
  const [active, setActive] = useState({
    text: 'DashBoard',
    component: SigninScreen,
  });

  const items = [
    {
      text: 'DashBoard',
      component: SigninScreen,
    },
    {
      text: 'Enroll',
      component: Enroll,
    },
    {
      text: 'My Purchases',
      component: SigninScreen,
    },
    {
      text: 'Transcripts',
      component: Enroll,
    },
    {
      text: 'Messages',
      component: SigninScreen,
    },
    {
      text: 'Notifications',
      component: Enroll,
    },
    {
      text: 'New Upload',
      component: SigninScreen,
    },
    {
      text: 'Uploaded',
      component: Enroll,
    },
    {
      text: 'Calender',
      component: SigninScreen,
    },
  ];

  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: 'white' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View
              key={index}
              style={{
                alignItems: 'center',
                width: windowWidth,
                height: 30,
                borderBottomWidth: 5,
                borderBottomColor:
                  active.text === item.text ? '#BA0913' : '#ffffff', //Make this to active red otherwise white
              }}
            >
              <TouchableOpacity onPress={() => setActive(item)}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#68696D',
                    width: windowWidth,
                    textAlign: 'center',
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Divider
          width={0.5}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 4,
          }}
        />
      </View>

      <ScrollView>
        <active.component />
      </ScrollView>
      <Divider width={1} />
      <BottomNav />
    </View>
  );
}
