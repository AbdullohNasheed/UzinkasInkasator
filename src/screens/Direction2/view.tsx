import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {BankIcon, UserIcon, UserIconn} from '../../assets/icons/icons';
import HeaderComponent from '../../components/header/Header';
import {useDirection2ScreenHook} from './hooks';
import {styles} from './style';
const Direction2view = () => {
  let {
    onDirection3Press,
    onDirection4Press,
    loading,
    route,
    region,
    routeNumber,
  } = useDirection2ScreenHook();
  return (
    <View style={styles.container}>
      <HeaderComponent
        hasImage={false}
        hasMenu={false}
        text={`Направление ${routeNumber}`}
      />
      <View style={styles.direction2Container}>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text style={styles.headerText}>{region}</Text>
        </View>
        <View style={{marginVertical: 50}}>
          <TouchableOpacity onPress={onDirection3Press} style={styles.box}>
            {route.length > 0 ? (
              <></>
            ) : (
              <>
                {loading ? (
                  <ActivityIndicator size={'large'} />
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 35,
                      alignItems: 'center',
                      marginHorizontal: 25,
                    }}>
                    <UserIconn />
                    <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                      <Text
                        style={{
                          marginHorizontal: 10,
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        Заказчики
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        ({route?.amount_of_orders})
                      </Text>
                    </View>
                  </View>
                )}
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={onDirection4Press} style={styles.box}>
            {route.length > 0 ? (
              <></>
            ) : (
              <>
                {loading ? (
                  <ActivityIndicator size={'large'} />
                ) : (
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
                      Банки ({route?.amount_of_orders})
                    </Text>
                  </View>
                )}
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Direction2view;
