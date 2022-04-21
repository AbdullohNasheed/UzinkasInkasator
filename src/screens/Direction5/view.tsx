import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {useDirection5ScreenHook} from './hooks';
import {styles} from './style';
const Direction5view = () => {
  let {onDirection4Press, onQrkodPress} = useDirection5ScreenHook();
  return (
    <View style={styles.container}>
      <HeaderComponent text="Визит к клиенту" />
      <View style={styles.DirictionContaienr}>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
            ЯТТ ИСАЕВ
          </Text>
        </View>
        <ScrollView>
          <View style={{alignItems: 'center', marginVertical: 40}}>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: '#A92F2F'}}>
              1.250.000
            </Text>
          </View>
          <View style={{marginTop: 80}}>
            <DefaultButton
              onPress={onDirection4Press}
              textStyle={{color: '#fff'}}
              text={'Ручной ввод данных'}
            />
            <DefaultButton
              onPress={onQrkodPress}
              textStyle={{color: '#fff'}}
              text={'Сканирование QR-кода'}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Direction5view;
