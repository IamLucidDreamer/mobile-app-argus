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
} from 'react-native';
import { Divider } from 'react-native-elements';
import BottomNav from '../Components/UniversalComponents/BottomNav';
import TopComponent from '../Components/UniversalComponents/TopComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function DashBoard() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
