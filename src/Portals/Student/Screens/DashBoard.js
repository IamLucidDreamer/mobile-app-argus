import React from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Divider } from 'react-native-elements';
import BottomNav from '../Components/UniversalComponents/BottomNav';
import TopComponent from '../Components/UniversalComponents/TopComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Buttons from '../Components/UniversalComponents/Buttons';
import { useSelector } from 'react-redux';

export default function DashBoard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>Welcome Back,</Text>
        <Text style={{ fontSize: 29, fontWeight: 'bold' }}>
          {user?.name + ' ' + (user?.lastname ? user?.lastname : null)}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 20 }}
        >
          {options.map((options, index) => (
            <View key={index} style={{ marginHorizontal: 17 }}>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <View
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: 'contain',
                    }}
                    source={options.img}
                  />
                </View>
                <Text style={{ fontSize: 16, marginTop: 5 }}>
                  {options.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 15,
            }}
          >
            To Do
          </Text>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              backgroundColor: '#fff',
              padding: 15,
              alignSelf: 'center',
              marginBottom: 15,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 6,
            }}
          >
            <Image
              style={{ width: 60, height: 60, resizeMode: 'contain' }}
              source={require('./../../../../assets/UniversalAssets/Logo256.png')}
            />
            <Text style={{ margin: 10, fontSize: 15 }}>
              The todo list tasks will rest here. The todo list tasks will rest
              here.
            </Text>
          </View>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              backgroundColor: '#fff',
              padding: 15,
              alignSelf: 'center',
              marginBottom: 15,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 6,
            }}
          >
            <Image
              style={{ width: 60, height: 60, resizeMode: 'contain' }}
              source={require('./../../../../assets/UniversalAssets/Logo256.png')}
            />
            <Text style={{ margin: 10, fontSize: 15 }}>
              The todo list tasks will rest here. The todo list tasks will rest
              here.
            </Text>
          </View>
          <View
            style={{
              width: '85%',
              flexDirection: 'row',
              backgroundColor: '#fff',
              padding: 15,
              alignSelf: 'center',
              marginBottom: 15,
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 4,
              elevation: 6,
            }}
          >
            <Image
              style={{ width: 60, height: 60, resizeMode: 'contain' }}
              source={require('./../../../../assets/UniversalAssets/Logo256.png')}
            />
            <Text style={{ margin: 10, fontSize: 15 }}>
              The todo list tasks will rest here. The todo list tasks will rest
              here.
            </Text>
          </View>
        </View>
        <Buttons title="Continue Studying" />
      </View>
    </ScrollView>
  );
}

const options = [
  {
    title: 'Hello World',
    img: require('../../../../assets/UniversalAssets/Logo256.png'),
  },
  {
    title: 'Hello World',
    img: require('../../../../assets/UniversalAssets/Logo256.png'),
  },
  {
    title: 'Hello World',
    img: require('../../../../assets/UniversalAssets/Logo256.png'),
  },
  {
    title: 'Hello World',
    img: require('../../../../assets/UniversalAssets/Logo256.png'),
  },
  {
    title: 'Hello World',
    img: require('../../../../assets/UniversalAssets/Logo256.png'),
  },
  {
    title: 'Hello World',
    img: require('../../../../assets/UniversalAssets/Logo256.png'),
  },
];
