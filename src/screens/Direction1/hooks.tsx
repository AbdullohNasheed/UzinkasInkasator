import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {Direction1Screen} from '.';
import {requests} from '../../api/requests';
import {ROUTES} from '../../navigation/ROUTES';
import {userLoggedOut} from '../../store/slices/userSlice';
import {Direction2Screen} from '../Direction2';
import {Direction3Screen} from '../Direction3';
import {Direction4Screen} from '../Direction4';
import {Direction5Screen} from '../Direction5';
import {Direction6Screen} from '../Direction6';
import {Direction7Screen} from '../Direction7';

export enum DROPDOWN_TYPES {
  CITY = 'city',
  REGION = 'region',
  ROUTE = 'route',
}

export interface DropdownState {
  visible: boolean;
  items: any[];
  value: any;
}

export const useDirectionScreenHook = () => {
  const navigation = useNavigation();
  let HomePress = () => {
    navigation.navigate(ROUTES.DIRECTION2);
  };
  const [state, setState] = useState<{
    [key in DROPDOWN_TYPES]: DropdownState;
  }>({
    city: {
      items: [],
      value: '',
      visible: false,
    },
    region: {
      items: [],
      value: '',
      visible: false,
    },
    route: {
      items: [],
      value: '',
      visible: false,
    },
  });
  const changeDropdown =
    (dropdownName: DROPDOWN_TYPES, key: keyof DropdownState) =>
    (val: boolean | any) => {
      if (dropdownName === DROPDOWN_TYPES.CITY && key === 'value') {
        setState(e => ({
          ...e,
          [dropdownName]: {
            ...e[dropdownName],
            [key]: typeof val === 'function' ? val() : val,
          },
          region: {
            ...e.region,
            items: e?.city?.items?.find(el => el.id == val())?.regions,
          },
        }));
        return;
      }
      setState(e => ({
        ...e,
        [dropdownName]: {
          ...e[dropdownName],
          [key]: typeof val === 'function' ? val() : val,
        },
      }));
    };

  const effect = async () => {
    try {
      const resCity = await requests.cities.getCities();
      const resRoute = await requests.cities.getRoutes();
      setState({
        ...state,
        city: {
          ...state.city,
          items: resCity.data.map(({name: label, id: value, regions}) => ({
            label,
            value,
            regions,
          })),
        },
        route: {
          ...state.route,
          items: resRoute.data.map(({name: label, id: value}) => ({
            label,
            value,
          })),
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    effect();
  }, []);

  useEffect(() => {
    console.log('UPDATING');
  });

  return {changeDropdown, HomePress, state};
};

let Stack = createNativeStackNavigator();

export default function DirectionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.DIRECTION1} component={Direction1Screen} />
      <Stack.Screen name={ROUTES.DIRECTION2} component={Direction2Screen} />
      <Stack.Screen name={ROUTES.DIRECTION3} component={Direction3Screen} />
      <Stack.Screen name={ROUTES.DIRECTION4} component={Direction4Screen} />
      <Stack.Screen name={ROUTES.DIRECTION5} component={Direction5Screen} />
      <Stack.Screen name={ROUTES.DIRECTION6} component={Direction6Screen} />
      <Stack.Screen name={ROUTES.DIRECTION7} component={Direction7Screen} />
    </Stack.Navigator>
  );
}
