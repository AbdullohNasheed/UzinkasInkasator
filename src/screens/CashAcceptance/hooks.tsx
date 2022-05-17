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
  const [currentData, setCurrentData] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(false);
  const order = p.params?.order || {};
  let onDirection3Press = async () => {
    //TODO loading
    try {
      setLoading(true);
      let res = await requests.cities.getFindRoute({
        city,
        region,
        route,
      });
      try {
        if (p.params.isManual) {
          const r = await requests.order.overvisit(order.orders[0].id);
        } else {
          const {amount, bag, client_id} = order.orders[0];
          const req = {
            amount,
            bag,
            client_id,
            date: currentData,
          };
          const r = await requests.order.createOrder(req);
        }
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
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minute = new Date().getMinutes();
    setCurrentData(date + '.' + month + '.' + year);
    setCurrentTime(hours + ':' + minute);
  }, []);

  return {
    onDirection3Press,
    currentData,
    currentTime,
    order,
    loading,
  };
};
