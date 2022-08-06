import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/ROUTES';
import {useSelector} from 'react-redux';
import {selectRoute} from '../../store/slices/routeSlice';
import {requests} from '../../api/requests';
export const useCashAcceptanceScreenHook = () => {
  let navigation = useNavigation();

  const p = useRoute();

  const {city, region, route} = useSelector(selectRoute);
  const [currentData, setCurrentData] = useState(p.params.currentData);
  const [currentTime, setCurrentTime] = useState(p.params.currentTime);
  const [loading, setLoading] = useState(false);
  const order = p.params?.order || {};
  let onDirection3Press = async () => {
    //TODO loading
    try {
      setLoading(true);
      console.log({route, p});

      let res = await requests.cities.getFindRoute({
        city,
        region,
        route: order.route_id,
      });
      try {
        const r = await requests.order.overvisit(
          p.params.pickedOrder?.id || order.id,
        );
      } catch (error) {
        console.log(error);
        console.log(error?.response);
      }
      navigation.navigate(ROUTES.DIRECTION3, res.data);
    } catch (error) {
      navigation.navigate(ROUTES.DIRECTION3, {});
    } finally {
      setLoading(false);
    }
  };
  return {
    onDirection3Press,
    currentData,
    currentTime,
    order,
    loading,
    pickedOrder: p.params?.pickedOrder,
  };
};
