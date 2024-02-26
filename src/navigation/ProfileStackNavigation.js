import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import CMTopTabNavigation from './CMTopTabNavigation';
import Income from '../screens/Income/Income';

const Stack = createNativeStackNavigator();

function ProfileStackNavigation() {
  return (
        <Stack.Navigator initialRouteName='MainProfile' screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainProfile" component={ProfileScreen} />
            <Stack.Screen name="Income" component={Income} />
            <Stack.Screen name="ClothingMgmt" component={CMTopTabNavigation} />
        </Stack.Navigator>
  );
}

export default ProfileStackNavigation;