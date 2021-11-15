import React, { useEffect, useState } from 'react';
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
import { docsName } from '../../../utils/DocsData';
import axiosInstance from '../../../utils/axiosInstance';

export default function DashBoard() {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const docs = useSelector((state) => state.student.docs);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let arr = [];
    if (user?.employmentRecord?.length === 0) {
      arr.push(`Add employment record`);
    }
    if (!user?.jobSearch?.looking) {
      arr.push(`Add job search deatils`);
    }

    if (!user?.dateOfBirth) {
      arr.push(`Add personal details`);
    }
    if (!user?.hasCriminalRecord) {
      arr.push(`Add background details`);
    }
    if (!user?.street) {
      arr.push(`Add contact details`);
    }
    if (!user?.courses?.length === 0) {
      arr.push(`Buy a course`);
    }

    docsName.forEach((element) => {
      let doc = docs.filter((d) => d.name === element);
      if (doc.length !== 0) {
        if (doc[0].isApproved === false) {
          arr.push(`${element} doc disapproved upload again.`);
        }
      } else {
        if (element !== 'Additional Doc 1' && element !== 'Additional Doc 2')
          arr.push(`Upload ${element} doc.`);
      }
    });

    setTasks(arr);
  }, [docs, user]);

  console.log(tasks);

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
          {tasks.map((t, index) => {
            return (
              <View
                key={index}
                style={{
                  width: '100%',
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
                <Text style={{ margin: 10, fontSize: 15 }}>{t}</Text>
              </View>
            );
          })}
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
