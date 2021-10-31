import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomNav() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 20,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          width: '35%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Icon icon="id-badge" text="Jobs" />
        <Icon icon="calendar" text="Calender" />
      </View>
      <View style={{ width: '20%', marginTop: -40 }}>
        <TouchableOpacity
          style={{
            height: 75,
            width: 75,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#BA0913',
            borderRadius: 100,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 10,
          }}
        >
          <FontAwesome5
            name={'home'}
            size={25}
            style={{ marginBottom: 3, alignItems: 'center', color: 'white' }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '35%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Icon icon="heart" text="Buy" />
        <Icon icon="paper-plane" text="Contact" />
      </View>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity style={{ alignItems: 'center' }}>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{ marginBottom: 3, alignItems: 'center', color: '#8890A6' }}
    />
    <Text style={{ color: '#8890A6' }}>{props.text}</Text>
  </TouchableOpacity>
);
