import {useRoute} from '@react-navigation/native';
import React from 'react';

export const Deriction3OneHook = () => {
  const route = useRoute();
  return {
    orders: route.params?.orders,
  };
};
