import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const useDirection3ScreenHook = () => {
    let navigation = useNavigation();
    let onDirection5Press = () => {
      navigation.navigate(ROUTES.DIRECTION5);
    };
    return {onDirection5Press,};
  };