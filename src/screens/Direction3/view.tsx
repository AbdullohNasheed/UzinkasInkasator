import React from 'react';
import {View, Text} from 'react-native';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import { useDirection3ScreenHook } from './hooks';
import {styles} from './style';
let {onDirection5Press,} = useDirection3ScreenHook();
const Direction3view = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.DirictionContaienr}>
        <View style={{alignItems: 'center', marginVertical: 25}}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: '#fff'}}>
            Заказчики
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#AA1B1B',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              1.ЯТТ ИССАЕВ
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#009899',
                marginVertical: 18,
              }}>
              Посетить
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#AA1B1B',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              1.ЯТТ ИССАЕВ
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#009899',
                marginVertical: 18,
              }}>
              Посетить
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#AA1B1B',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              1.ЯТТ ИССАЕВ
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#009899',
                marginVertical: 18,
              }}>
              Посетить
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#AA1B1B',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              1.ЯТТ ИССАЕВ
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#009899',
                marginVertical: 18,
              }}>
              Посетить
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              flex: 2,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#AA1B1B',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              1.ЯТТ ИССАЕВ
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#181926',
              marginHorizontal: 15,
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#009899',
                marginVertical: 18,
              }}>
              Посетить
            </Text>
          </View>
        </View>
		<View style={{marginVertical: 20,}}>
			<DefaultButton onPress={onDirection5Press} text={'Уведомить об инкассации'}/>
		</View>
      </View>
    </View>
  );
};

export default Direction3view;
