import React, { useEffect } from 'react';
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
  ActivityIndicator,
  Image,
} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Buttons from './Portals/Student/Components/UniversalComponents/Buttons';

export default function LandingScreen({ navigation }) {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth === 'true') {
      navigation.navigate('Student');
    }
  }, [auth?.isAuth]);

  return (
    <>
      {auth.token !== null && auth.isAuth === 'loading' ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#BA0913" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <Image
            style={{ width: 240, height: 240, flex: 1 }}
            resizeMode={'contain'}
            source={require('../assets/UniversalAssets/Logo512.png')}
          />
          <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
            <Buttons
              func={() => navigation.navigate('Login')}
              title={'Client Portal'}
            />
            <Buttons
              func={() => navigation.navigate('Login')}
              title={'Student Portal'}
            />
            <Buttons
              func={() => navigation.navigate('Login')}
              title={'Employee Portal'}
            />
          </View>
        </SafeAreaView>
      )}
    </>
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
