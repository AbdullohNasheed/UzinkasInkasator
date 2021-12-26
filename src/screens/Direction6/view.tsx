import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  ClockIcon,
  KalendarIcon,
  KalendarMiniIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultInput from '../../components/general/DefaultInput';
import HeaderComponent from '../../components/header/Header';
import { useDirection6ScreenHook } from './hooks';
import {styles} from './style';
let {onDirection4Press,} = useDirection6ScreenHook();
const Direction6view = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent text={'Визит к клиенту'} />
      <ScrollView style={styles.DirictionContaienr}>
        <View style={{marginVertical: 35, marginBottom: 130,}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#009899',
                  marginVertical: 5,
                }}>
                День
              </Text>
              <DefaultInput icon={KalendarMiniIcon} placeholder={'День'} />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#009899',
                  marginVertical: 5,
                }}>
                Время
              </Text>
              <DefaultInput icon={ClockIcon} placeholder={'День'} />
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 12,
              backgroundColor: '#181926',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                marginVertical: 20,
              }}>
              ЯТТ ИСАЕВ
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              borderRadius: 12,
              marginVertical: 10,
              backgroundColor: '#181926',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                marginVertical: 20,
              }}>
              8 000 000
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              borderRadius: 12,
              marginVertical: 10,
              backgroundColor: '#181926',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                marginVertical: 20,
              }}>
              0925
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              borderRadius: 12,
              marginVertical: 10,
              backgroundColor: '#181926',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                marginVertical: 20,
              }}>
              Ипотека 04001
            </Text>
          </View>
          <View style={{marginVertical: 25}}>
            <DefaultButton onPress={onDirection4Press} textStyle={{color: '#fff'}} text={'Принять'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Direction6view;
