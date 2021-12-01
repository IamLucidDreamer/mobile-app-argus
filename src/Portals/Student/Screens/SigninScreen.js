import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axiosInstance from '../../../utils/axiosInstance';
import Buttons from '../Components/UniversalComponents/Buttons';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import {
  getToken,
  isAuthenticated,
  setID,
  setToken,
  setUser,
} from '../../../redux/actions/authActions';
import Error from '../Components/UniversalComponents/Error';

const SigninScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = '*Required';
    }
    if (!values.lastname) {
      errors.lastname = '*Required';
    }
    if (!values.password) {
      errors.password = '*Required';
    } else if (values.password.length < 6) {
      errors.password = 'Must be atleast 6 characters';
    }

    if (!values.email) {
      errors.email = '*Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      password: '',
      email: '',
      name: '',
      lastname: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      axiosInstance
        .post(`/signup`, values)
        .then(() => {
          setLoading(false);
          axiosInstance.post('/signin', values).then((res) => {
            SecureStore.setItemAsync('jwt', res.data.token);
            SecureStore.setItemAsync('id', res.data.user._id);
            dispatch(setUser(res.data.user));
            dispatch(setToken(res.data.token));
            dispatch(setID(res.data.user._id));
            dispatch(isAuthenticated('true'));
            navigation.navigate('Student');
            resetForm();
          });
        })
        .catch((err) => {
          resetForm();
          setLoading(false);
        });
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{ width: 150, height: 150, marginBottom: 0 }}
          source={require('../../../../assets/UniversalAssets/Logo512.png')}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            keyboardType="default"
            placeholderTextColor="#8890A6"
            onChangeText={handleChange('name')}
          />
        </View>
        {errors.name ? <Error error={errors.name} /> : null}

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Lastname"
            keyboardType="default"
            placeholderTextColor="#8890A6"
            onChangeText={handleChange('lastname')}
          />
        </View>
        {errors.lastname ? <Error error={errors.lastname} /> : null}

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#8890A6"
            onChangeText={handleChange('email')}
          />
        </View>
        {errors.email ? <Error error={errors.email} /> : null}

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#8890A6"
            secureTextEntry={true}
            onChangeText={handleChange('password')}
          />
        </View>
        {errors.password ? <Error error={errors.password} /> : null}

        <View
          style={{
            marginTop: 30,
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Buttons loading={loa} func={handleSubmit} title={'Sign Up'} />
        </View>
        <Text style={styles.forgottext}>OR</Text>
        <Buttons title={'Google'} />
        <Buttons title={'Facebook'} />
        <View style={{ flexDirection: 'row', marginVertical: 7 }}>
          <Text style={styles.forgottext}>Existing user?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Loginin')}>
            <Text
              style={{
                color: '#BA0913',
                fontWeight: 'bold',
                paddingHorizontal: 4,
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <Text style={styles.forgottext}>here.</Text>
        </View>
        <View
          style={{
            marginTop: 'auto',
            flexDirection: 'row',
            marginVertical: 8,
            flexWrap: 'wrap',
            width: '90%',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.forgottext}>
            By creating an account, you agree to our
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#BA0913',
                fontWeight: 'bold',
                paddingHorizontal: 4,
              }}
            >
              Terms of Service
            </Text>
          </TouchableOpacity>
          <Text style={styles.forgottext}>and</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#BA0913',
                fontWeight: 'bold',
                paddingHorizontal: 4,
              }}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F4F5F9',
  },
  inputView: {
    width: '85%',
    height: 50,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderColor: '#8890A6',
    width: '100%',
    flex: 1,
    padding: 10,
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
