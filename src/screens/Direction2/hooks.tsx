import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const useDirection2ScreenHook = () => {
    let navigation = useNavigation();
    let onDirection3Press = () => {
      navigation.navigate(ROUTES.DIRECTION3);
    };
    let onDirection4Press = () => {
        navigation.navigate(ROUTES.DIRECTION4);
      };
    return {onDirection3Press, onDirection4Press};
  };
  
  let Stack = createNativeStackNavigator();
