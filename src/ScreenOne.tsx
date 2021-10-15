import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const name = '1';

const ScreenOne: React.FC = () => {
  const navigation = useNavigation();

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
      <Button title='Go to Screen 2' onPress={() => navigation.navigate('2')} />
    </View>
  );
};

export default ScreenOne;
