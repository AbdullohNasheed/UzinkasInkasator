import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const useDirection6ScreenHook = () => {
    let navigation = useNavigation();
    let onDirection5Press = () => {
      navigation.navigate(ROUTES.DIRECTION5);
    };
    // let onVisitClientPress = () => {
    //     navigation.navigate(ROUTES.VISITCLIENT);
    //   };
    // let onDirection4Press = () => {
    //     navigation.navigate(ROUTES.DIRECTION);
    //   };
    return {onDirection5Press};
  };