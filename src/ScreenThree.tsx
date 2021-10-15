import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const name = '3';

const ScreenThree: React.FC = () => {
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>You are on screen {name}</Text>
    </View>
  );
};

export default ScreenThree;
