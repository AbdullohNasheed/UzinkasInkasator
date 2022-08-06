import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {useDirection5ScreenHook} from './hooks';
import {styles} from './style';
const Direction5view = () => {
  let {onDirection4Press, onQrkodPress, order} = useDirection5ScreenHook();
  return (
    <View style={styles.container}>
      <HeaderComponent text="Визит к клиенту" />
      <View style={styles.DirictionContaienr}>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
            Название компании:
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#009899',
              marginTop: 8,
            }}>
            {order.name}
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              // marginVertical: 40,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#A92F2F',
              }}>
              {order.amount}
            </Text>
            <Text
              style={{
                marginLeft: 6,
                fontSize: 40,
                fontWeight: 'bold',
                color: '#A92F2F',
              }}>
              сум
            </Text>
          </View>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            {/* <Text style={{fontSize: 16, fontWeight: '400', color: '#616161'}}>
              Посмотреть историю долга
            </Text> */}
          </View>
          <View style={{marginTop: 50}}>
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
