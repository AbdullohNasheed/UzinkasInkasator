import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Direction3OneScreen} from '.';
import HeaderComponent from '../../components/header/Header';
import {Deriction3OneHook} from './hooks';
import {styles} from './style';
const Direction3view = () => {
  const {orders} = Deriction3OneHook();
  console.log(JSON.stringify(orders, null, 4), 'asdsadasdasdas1231312323');
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <ScrollView style={styles.DirictionContaienr}>
        <View style={{marginBottom: 160}}>
          <View style={{alignItems: 'center', marginVertical: 25}}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: '#fff'}}>
              Заказчики
            </Text>
          </View>
          {orders?.map(e => {
            console.log(e);
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  backgroundColor: '#181926',
                  marginHorizontal: 20,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 2,
                    paddingVertical: 10,
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#009899',
                      marginVertical: 18,
                      marginLeft: 20,
                    }}>
                    {e.client.name}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderColor: '#009899',
                    marginVertical: 20,
                    paddingHorizontal: 20,
                    marginRight: 20,
                    borderWidth: 1,
                    justifyContent: 'center',
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
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Direction3view;
