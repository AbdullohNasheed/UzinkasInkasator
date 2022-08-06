import {useNavigation, useRoute} from '@react-navigation/core';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {requests} from '../../api/requests';
import {ROUTES} from '../../navigation/ROUTES';
import {selectRoute} from '../../store/slices/routeSlice';
export const useDirection2ScreenHook = () => {
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState([]);
  const [banks, setBanks] = useState([]);
  const history = useRoute();
  const data = history.params;
  let navigation = useNavigation();
  let onDirection3Press = () => {
    navigation.navigate(ROUTES.DIRECTION3, route);
  };

  const {routeNumber, regionName: region} = useSelector(selectRoute);

  let onDirection4Press = () => {
    // const banks = route?.orders?.map(e => {
    //   return e.bank;
    // });
    // console.log(banks);

    navigation.navigate(ROUTES.DIRECTION4, {banks});
  };

  const effect = async () => {
    try {
      setLoading(true);
      let res = await requests.cities.getFindRoute({
        city: data?.city,
        region: data?.region,
        route: data?.route,
      });
      console.log({data});

      // console.log({dsa: res.data});
      let bankRes = await requests.order.getBanks();
      setBanks(bankRes.data.banks);
      setRoute(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    effect();
  }, []);

  return {
    onDirection3Press,
    onDirection4Press,
    route,
    region,
    routeNumber,
    loading,
    banks,
  };
};

let Stack = createNativeStackNavigator();
