import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Buttons from '../Components/UniversalComponents/Buttons';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 150, height: 150, marginTop: 0, marginBottom: 30 }}
        source={require('../../../../assets/UniversalAssets/Logo.png')}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#8890A6"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#8890A6"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.forgotview}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
          <Text style={styles.forgottext}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <Buttons navigation={navigation} route={'StudentHome'} title={'Log In'} />
      <Text style={styles.forgottext}>OR</Text>
      <Buttons title={'Google'} />
      <Buttons title={'Facebook'} />
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        <Text style={styles.forgottext}>New user?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text
            style={{
              color: '#BA0913',
              fontWeight: 'bold',
              marginHorizontal: 4,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={styles.forgottext}>here.</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F5F9',
  },
  inputView: {
    borderBottomWidth: 1,
    borderColor: '#8890A6',
    width: '90%',
    height: 55,
    marginBottom: 30,
    alignItems: 'flex-start',
  },
  TextInput: {
    width: '100%',
    flex: 1,
    padding: 10,
    marginLeft: 10,
    color: '#8890A6',
    fontSize: 20,
  },
  forgotview: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgottext: {
    color: '#68696D',
    textAlign: 'center',
  },
});
