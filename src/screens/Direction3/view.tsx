import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {useDirection3ScreenHook} from './hooks';
import {styles} from './style';
const Direction3view = () => {
  let {onDirection5Press, orders, routeNumber} = useDirection3ScreenHook();

  return (
    <View style={styles.container}>
      <HeaderComponent text={`Направление ${routeNumber}`} />
      <ScrollView style={styles.DirictionContaienr}>
        <View style={{marginBottom: 160}}>
          <View style={{alignItems: 'center', marginVertical: 25}}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: '#fff'}}>
              Заказчики
            </Text>
          </View>
          {orders?.length > 0 &&
            orders[0].orders &&
            orders[0]?.orders?.length > 0 &&
            orders?.map(e => {
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
                      style={
                        e.orders[0]?.status === 1
                          ? styles.textOne
                          : styles.textTwoo
                      }>
                      {e.name}
                    </Text>
                    <Text
                      style={
                        e.orders[0]?.status === 1
                          ? styles.textOne
                          : styles.textTwoo
                      }>
                      {e.number}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => onDirection5Press(e)}
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
                      {e.orders[0]?.status === 1 ? 'Посетить' : 'Открыть'}
                    </Text>
                  </TouchableOpacity>
                </View>
                // <TouchableOpacity
                //   style={{
                //     backgroundColor: 'black',
                //     marginHorizontal: 20,
                //     marginVertical: 20,
                //   }}>
                //   <Text style={styles.textOne}>{e.name}</Text>
                //   <Text style={styles.textOne}>{e.number}</Text>
                // </TouchableOpacity>
              );
            })}

          {/* <View style={{marginVertical: 20}}>
            <DefaultButton
              onPress={onDirection5Press}
              text={'Уведомить об инкассации'}
            />
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Direction3view;
