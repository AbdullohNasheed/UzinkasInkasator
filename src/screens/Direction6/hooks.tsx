import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/ROUTES';
export const useDirection6ScreenHook = () => {
  let navigation = useNavigation();
  let route = useRoute();
  // console.log('heyy', route.params.order);
  const [currentData, setCurrentData] = useState<string | number>();
  const [currentTime, setCurrentTime] = useState<string | number>();
  let onCashPress = () => {
    navigation.navigate(ROUTES.CASH, {
      order: route.params.order,
      isManual: !route.params.pickedOrder,
      pickedOrder: route.params.pickedOrder,
      currentData,
      currentTime,
    });
  };
  console.log({params6: route.params});

  useEffect(() => {
    // var date = new Date().getDate();
    // var month = new Date().getMonth() + 1;
    // var year = new Date().getFullYear();
    let hours = new Date().getHours().toString();
    let minute = new Date().getMinutes().toString();
    let date = new Date();
    const result = date.toISOString().split('T')[0];
    setCurrentData(result);
    console.log({minute});
    hours = parseInt(hours) < 10 ? `0${hours}` : hours;
    minute = parseInt(minute) < 10 ? `0${minute}` : minute;
    setCurrentTime(hours + ':' + minute);
  }, []);

  return {
    onCashPress,
    currentData,
    currentTime,
    order: route.params.order,
    pcikedOrder: route.params.pickedOrder,
  };
};
