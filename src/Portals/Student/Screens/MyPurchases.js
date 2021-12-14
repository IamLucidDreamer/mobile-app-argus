import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useSelector } from 'react-redux';
import BottomNav from '../Components/UniversalComponents/BottomNav';
import TopComponent from '../Components/UniversalComponents/TopComponent';

export default function MyPurchases() {
  const course = useSelector((state) => state.student.course);
  const progress = useSelector((state) => state.student.progress);

  return (
    <View style={styles.container}>
      <ScrollView>
        {course.map((c) => {
          let currentCourse = progress?.courses?.filter(
            (f) => f.courseId === c._id,
          )[0];
          return (
            <View
            key={}
              style={{
                width: '95%',
                backgroundColor: '#fff',
                padding: 15,
                alignSelf: 'center',
                marginVertical: 20,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
                elevation: 8,
              }}
            >
              <Text
                style={{
                  color: '#2A2B2F',
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginBottom: 15,
                }}
              >
                Basic Security Training Course (online) $99 + HST
              </Text>
              <Divider width={1} />
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 15,
                  lineHeight: 20,
                  marginVertical: 15,
                }}
              >
                Basic Security Training Course (online) $99 + HST Basic Security
                Training Course (online) $99 + HST Basic Security Training
                Course (online) $99 + HST Basic Security Training Course
                (online) $99 + HST Basic Security Training Course (online) $99 +
                HST
              </Text>
              <TouchableOpacity
                style={{
                  width: '100%',
                  backgroundColor: '#BA0913',
                  color: '#ffffff',
                  borderRadius: 10,
                  height: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}
              >
                <Text style={{ color: 'white', fontSize: 20 }}>
                  Download Receipt
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <Divider width={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F9",
  },
});
