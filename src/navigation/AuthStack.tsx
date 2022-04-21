import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './ROUTES';
import Tabs from './Tab';
import {LoginScreen} from '../screens/login';
import Direction1view from '../screens/Direction1/view';
import {QrKodScreen} from '../screens/qrkod';
import {HomeScreen} from '../screens/Home';
import {useSelector} from 'react-redux';
import {selectUser} from '../store/slices/userSlice';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const user = useSelector(selectUser);

  console.log('user: ', JSON.stringify(user, null, 4));
  console.log('result: ', !user.token);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!user.token ? (
        <>
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={ROUTES.HOME_TABS} component={Tabs} />
          <Stack.Screen name={ROUTES.QRKOD} component={QrKodScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
