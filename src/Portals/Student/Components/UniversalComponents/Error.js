import React from 'react';
import { Text, View } from 'react-native';

const Error = ({ error }) => {
  return (
    <View style={{ justifyContent: 'flex-start', width: '85%' }}>
      <Text style={{ color: '#BA0913' }}>{error}</Text>
    </View>
  );
};

export default Error;
