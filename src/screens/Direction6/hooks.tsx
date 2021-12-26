import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ROUTES } from "../../navigation/ROUTES";
export const useDirection6ScreenHook = () => {
    let navigation = useNavigation();
    // let onDirection6Press = () => {
    //   navigation.navigate(ROUTES.DIRECTION6);
    // };
    let onDirection4Press = () => {
        navigation.navigate(ROUTES.DIRECTION5);
      };
    // let onDirection4Press = () => {
    //     navigation.navigate(ROUTES.DIRECTION);
    //   };
    return {onDirection4Press,};
  };