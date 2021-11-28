import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function TopComponent({ navigation }) {
  return (
    <View>
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
        {/* <TouchableOpacity >
          <FontAwesome5
            name={'arrow-left'}
            size={25}
            style={{ marginLeft: 10, marginRight: 25 }}
          />
        </TouchableOpacity> */}
        <View style={{ width: 60, height: 60 }}></View>
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
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: 'contain',
              borderRadius: 25,
            }}
            source={require('./../../../../../assets/UniversalAssets/TestingImage.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
