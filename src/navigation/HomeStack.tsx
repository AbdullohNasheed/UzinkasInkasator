import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Direction1view from '../screens/Direction1/view';
import { ROUTES } from './ROUTES';
import { Direction2Screen } from '../screens/Direction2';
import { Direction3Screen } from '../screens/Direction3';
import { Direction4Screen } from '../screens/Direction4';
import { Direction5Screen } from '../screens/Direction5';
import { Direction6Screen } from '../screens/Direction6';
import { Direction7Screen } from '../screens/Direction7';
let Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.DIRECTION1_STACK} component={Direction1view} />
    </Stack.Navigator>
  );
};
export default {HomeStack};
