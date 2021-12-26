import {useNavigation} from '@react-navigation/core';
import {ROUTES} from '../../navigation/ROUTES';

export const useDirectionScreenHook = () => {
  let navigation = useNavigation();
  let onDirection2Press = () => {
    navigation.navigate(ROUTES.DIRECTION2);
  };
  return {onDirection2Press};
};
