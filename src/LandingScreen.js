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
        style={{ width: 240, height: 240 , flex:1}}
        resizeMode={"contain"}
        source={require('../assets/UniversalAssets/Logo512.png')}
      />
      <View style={{flex:1, alignItems:'center', width:"100%"}}>
      <Buttons
        navigation={navigation}
        route={'Loginin'}
        title={'Client Portal'}
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
      </View>
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
