import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Buttons from './Portals/Student/Components/UniversalComponents/Buttons';

export default function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ marginTop: 60, marginBottom: 40, width: 220, height: 220 }}
        source={require('../assets/UniversalAssets/Logo.png')}
      />
      <Buttons
        navigation={navigation}
        route={'Loginin'}
        title={'Student Portal'}
      />
      <Buttons
        navigation={navigation}
        route={'Loginin'}
        title={'Employee Portal'}
      />
      <Buttons
        navigation={navigation}
        route={'Loginin'}
        title={'Client Portal'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
