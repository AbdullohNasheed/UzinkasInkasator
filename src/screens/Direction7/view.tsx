import React from 'react';
import {View, Text} from 'react-native';
import { DelitIcon } from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';

const Direction7view = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.DirictionContaienr}>
        <View style={{marginVertical: 100}}>
          <View style={{alignItems: 'center', marginVertical: 50,}}>
            <DelitIcon/>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginVertical: 50,}}>Вы не активированы</Text>
          </View>
          <View style={{}}>
            <DefaultButton text={'Вы не активированы'}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Direction7view;
