import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import ScreenOne from './src/ScreenOne';
import ScreenTwo from './src/ScreenTwo';
import ScreenThree from './src/ScreenThree';

const NativeStack = createNativeStackNavigator();
const JSStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator initialRouteName={'1'}>
        <NativeStack.Group screenOptions={{ headerBackTitleVisible: false }}>
          <NativeStack.Screen name='1' component={ScreenOne} />
          <NativeStack.Screen name='2' component={ScreenTwo} />
          <NativeStack.Screen
            name='3'
            component={ScreenThree}
            options={({ navigation }) => ({
              headerBackVisible: false,
              headerLeft: () => (
                <HeaderBackButton onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </NativeStack.Group>
      </NativeStack.Navigator>
      {/* <JSStack.Navigator initialRouteName={'1'}>
        <JSStack.Group screenOptions={{ headerBackTitleVisible: false }}>
          <JSStack.Screen name='1' component={ScreenOne} />
          <JSStack.Screen name='2' component={ScreenTwo} />
          <JSStack.Screen
            name='3'
            component={ScreenThree}
            options={({ navigation }) => ({
              headerBackVisible: false,
              headerLeft: () => (
                <HeaderBackButton onPress={() => navigation.goBack()} />
              ),
            })}
          />
        </JSStack.Group>
      </JSStack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
