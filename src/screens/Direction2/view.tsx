import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BankIcon, UserIcon, UserIconn} from '../../assets/icons/icons';
import HeaderComponent from '../../components/header/Header';
import { useDirection2ScreenHook } from './hooks';
import {styles} from './style';
const Direction2view = () => {
  let {onDirection3Press, onDirection4Press} = useDirection2ScreenHook();
  return (
    <View style={styles.container}>
      <HeaderComponent hasImage={false} hasMenu={false} text={'Направление 15'} />
      <View style={styles.direction2Container}>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text style={styles.headerText}>Мирабадский район</Text>
        </View>
        <View style={{marginVertical: 50,}}>
          <TouchableOpacity onPress={onDirection3Press} style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 35,
                alignItems: 'center',
                marginHorizontal: 25,
              }}>
              <UserIconn />
              <Text
                style={{
                  marginHorizontal: 30,
                  fontSize: 20,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Заказчики ( 14 )
              </Text>
            </View>
          </TouchableOpacity>
		  <TouchableOpacity onPress={onDirection4Press} style={styles.box}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 35,
                alignItems: 'center',
                marginHorizontal: 25,
              }}>
              <BankIcon />
              <Text
                style={{
                  marginHorizontal: 30,
                  fontSize: 20,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Банки ( 5 )
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Direction2view;
