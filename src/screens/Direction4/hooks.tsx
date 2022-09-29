import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {ROUTES} from '../../navigation/ROUTES';

export const Direction4Hook = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setViseble] = useState(true);
  const toggleVisibleModal = () => {
    setModalVisible(true);
  };

  const onContinuePress = e => {
    setModalVisible(false)
    if (modalVisible) {
      setViseble(false);
    } else {
      setViseble(true);
    }
    // navigation.navigate(ROUTES.DIRECTION3ONE, {orders: e.active_orders});
  };

  return {
    modalVisible,
    setModalVisible,
    toggleVisibleModal,
    route: route.params?.banks,
    onContinuePress,
    visible,
  };
};
