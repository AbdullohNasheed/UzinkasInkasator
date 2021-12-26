import React from 'react';
import {View, Text} from 'react-native';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import { useDirection5ScreenHook } from './hooks';
import {styles} from './style';
let {onDirection4Press} = useDirection5ScreenHook ();
const Direction5view = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.DirictionContaienr}>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
            ЯТТ ИСАЕВ
          </Text>
        </View>
        <View style={{alignItems: 'center', marginVertical: 40,}}>
          <Text style={{fontSize: 40, fontWeight:'bold', color: '#A92F2F',}}>1.250.000</Text>
        </View>
        <View style={{marginTop: 100,}}>
          <DefaultButton onPress={onDirection4Press} textStyle={{color: '#fff'}} text={'Ручной ввод данных'}/>
          <DefaultButton textStyle={{color: '#fff'}} text={'Сканирование QR-кода'}/>
        </View>
      </View>
    </View>
  );
};

export default Direction5view;
