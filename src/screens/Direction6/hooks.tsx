import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/ROUTES';
export const useDirection6ScreenHook = () => {
  let navigation = useNavigation();
  let route = useRoute();
  // console.log('heyy', route.params.order);
  const [currentData, setCurrentData] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  let onCashPress = () => {
    navigation.navigate(ROUTES.CASH, {
      order: route.params.order,
      isManual: true,
    });
  };
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minute = new Date().getMinutes();
    setCurrentData(date + '.' + month + '.' + year);
    setCurrentTime(hours + ':' + minute);
  }, []);

  return {
    onCashPress,
    currentData,
    currentTime,
    order: route.params.order,
  };
};
