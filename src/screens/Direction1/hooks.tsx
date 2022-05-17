import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Direction1Screen} from '.';
import {requests} from '../../api/requests';
import {ROUTES} from '../../navigation/ROUTES';
import {setRoute} from '../../store/slices/routeSlice';
import {userLoggedOut} from '../../store/slices/userSlice';
import {CashAcceptanceScreen} from '../CashAcceptance';
import CashAcceptance from '../CashAcceptance/view';
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
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  let HomePress = () => {
    const routeNumber = state.route.items.find(
      e => state.route.value === e.value,
    ).label;
    const regionName = state.region.items.find(
      e => state.region.value === e.value,
    ).label;
    dispatch(
      setRoute({
        city: state.city.value,
        region: state.region.value,
        route: state.route.value,
        regionName,
        routeNumber,
      }),
    );
    navigation.navigate(ROUTES.DIRECTION2, {
      city: state.city.value,
      region: state.region.value,
      route: state.route.value,
      regionName,
      routeNumber,
    });
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
      // if (dropdownName === DROPDOWN_TYPES.CITY && key === 'value') {
      //   setState(e => ({
      //     ...e,
      //     [dropdownName]: {
      //       ...e[dropdownName],
      //       [key]: typeof val === 'function' ? val() : val,
      //     },
      //     region: {
      //       ...e.region,
      //       items: e?.city?.items?.find(el => el.id == val())?.regions,
      //     },
      //   }));
      //   return;
      // }
      setState(e => ({
        ...e,
        [dropdownName]: {
          ...e[dropdownName],
          [key]: typeof val === 'function' ? val() : val,
        },
      }));
    };

  useEffect(() => {
    if (!!state.city.value) {
      console.log(state.city.value);
      console.log(state.city.items.find(el => el.value == state.city.value));

      setState(e => {
        return {
          ...e,
          region: {
            ...e.region,
            items: e.city.items
              .find(el => el.value == state.city.value)
              .regions.map(({id: value, name: label}) => ({label, value})),
          },
        };
      });
    }
  }, [state.city.value]);

  useEffect(() => {
    if (state.city.value && state.region.value && state.route.value) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [state.city.value, state.region.value, state.route.value]);

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
  const onLogoutPress = () => {
    dispatch(userLoggedOut());
  };

  useEffect(() => {
    effect();
  }, []);
  return {changeDropdown, HomePress, state, active, onLogoutPress};
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
      <Stack.Screen name={ROUTES.CASH} component={CashAcceptanceScreen} />
    </Stack.Navigator>
  );
}
