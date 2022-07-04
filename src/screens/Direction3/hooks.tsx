import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {ROUTES} from '../../navigation/ROUTES';
import {selectRoute} from '../../store/slices/routeSlice';
export const useDirection3ScreenHook = () => {
  let navigation = useNavigation();
  let route = useRoute();
  let onDirection5Press = item => {
    console.log(item, route.params);

    navigation.navigate(ROUTES.DIRECTION5, {
      order: item,
      orders: route.params.orders,
    });
  };

  console.log(route.params);

  const {routeNumber} = useSelector(selectRoute);
  return {
    onDirection5Press,
    orders: route.params.orders,
    routeNumber,
  };
};
