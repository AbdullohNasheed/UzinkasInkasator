import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Direction1Screen} from '../screens/Direction1';
import {Direction2Screen} from '../screens/Direction2';
import {Direction3Screen} from '../screens/Direction3';
import {Direction4Screen} from '../screens/Direction4';
import {Direction5Screen} from '../screens/Direction5';
import {ROUTES} from './ROUTES';
import { Direction7Screen } from '../screens/Direction7';
import { Direction6Screen } from '../screens/Direction6';

let Stack = createNativeStackNavigator();

export default function Direction1Stack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.DIRECTION1} component={Direction1Screen} />
      <Stack.Screen name={ROUTES.DIRECTION2} component={Direction2Screen} />
      <Stack.Screen name={ROUTES.DIRECTION3} component={Direction3Screen} />
      <Stack.Screen name={ROUTES.DIRECTION4} component={Direction4Screen} />
      <Stack.Screen name={ROUTES.DIRECTION5} component={Direction5Screen} />
      <Stack.Screen name={ROUTES.DIRECTION6} component={Direction6Screen} />
      <Stack.Screen name={ROUTES.DIRECTION7 } component={Direction7Screen} />
    </Stack.Navigator>
  );
}
