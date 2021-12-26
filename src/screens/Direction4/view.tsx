import React from 'react';
import {View, Text} from 'react-native';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';

const Direction4view = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={styles.DirictionContaienr}>
        <View style={{alignItems: 'center', marginVertical: 25}}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: '#fff'}}>
            Банки
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
                color: '#fff',
                marginVertical: 18,
              }}>
              мфо
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
                color: '#009899',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              2. Равнак банк
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
                color: '#fff',
                marginVertical: 18,
              }}>
              мфо
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
                color: '#fff',
                marginVertical: 18,
              }}>
              мфо
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
                color: '#009899',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              2. ООО НОРМА
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
                color: '#fff',
                marginVertical: 18,
              }}>
              мфо
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
                color: '#009899',
                marginHorizontal: 20,
                fontWeight: '600',
                marginVertical: 18,
              }}>
              2. ООО НОРМА
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
                color: '#fff',
                marginVertical: 18,
              }}>
              мфо
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Direction4view;
