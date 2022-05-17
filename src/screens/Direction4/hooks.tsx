import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';

export const Direction4Hook = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleVisibleModal = () => {
    setModalVisible(true);
  };
  return {
    modalVisible,
    setModalVisible,
    toggleVisibleModal,
    route: route.params?.banks,
  };
};
