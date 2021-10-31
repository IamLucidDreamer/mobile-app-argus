import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Portals/Student/Screens/LoginScreen';
import SigninScreen from './src/Portals/Student/Screens/SigninScreen';
import StudentHome from './src/Portals/Student/Screens/StudentHome';
import UploadDocument from './src/Portals/Student/Screens/UploadDocument';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopComponent from './src/Portals/Student/Components/UniversalComponents/TopComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: TopComponent,
          }}
        >
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="StudentHome" component={StudentHome} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : '0',
    backgroundColor: '#fff',
    flex: 1,
  },
});
