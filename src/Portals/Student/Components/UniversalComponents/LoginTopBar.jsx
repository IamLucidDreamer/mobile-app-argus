import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function LoginTopBar({ navigation }) {
  return (
    <View style={{backgroundColor: "#F4F5F9",}}>
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 40,
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            name={'arrow-left'}
            size={25}
            style={{ marginLeft: 15, marginRight: 25 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            alignSelf: 'center',
            color: '#BA0913',
          }}
        >
          ARGUS<Text style={{ color: '#707070' }}>SECURITY</Text>
        </Text>
        <View
          style={{
            width: 60,
            height: 40,
            resizeMode: 'contain',
            borderRadius: 25,
          }}
        ></View>
      </View>
    </View>
  );
}
