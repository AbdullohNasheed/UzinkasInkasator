import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/ROUTES';
export const useDirection5ScreenHook = () => {
  let navigation = useNavigation();
  let route = useRoute();
  let onQrkodPress = () => {
    navigation.navigate(ROUTES.QRKOD, route.params);
  };
  let onDirection4Press = () => {
    navigation.navigate(ROUTES.DIRECTION6, {order: route.params.order});
  };
  // let onDirection4Press = () => {
  //     navigation.navigate(ROUTES.DIRECTION);
  //   };
  return {onQrkodPress, onDirection4Press, order: route.params.order};
};
