import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {useDirection3ScreenHook} from './hooks';
import {styles} from './style';
let {onDirection5Press} = useDirection3ScreenHook();
const Direction3view = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent text="Направление 15" />
      <ScrollView style={styles.DirictionContaienr}>
        <View style={{marginBottom: 160,}}>
          <View style={{alignItems: 'center', marginVertical: 25}}>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: '#fff'}}>
              Заказчики
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={styles.tow}>
              <Text style={styles.textOne}>1.ЯТТ ИССАЕВ</Text>
            </View>
            <TouchableOpacity onPress={onDirection5Press} style={styles.one}>
              <Text style={styles.textTwo}>Посетить</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={styles.tow}>
              <Text style={styles.textOne}>1.ЯТТ ИССАЕВ</Text>
            </View>
            <TouchableOpacity onPress={onDirection5Press} style={styles.one}>
              <Text style={styles.textTwo}>Посетить</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={styles.tow}>
              <Text style={styles.textOne}>1.ЯТТ ИССАЕВ</Text>
            </View>
            <TouchableOpacity onPress={onDirection5Press} style={styles.one}>
              <Text style={styles.textTwo}>Посетить</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={styles.tow}>
              <Text style={styles.textOne}>1.ЯТТ ИССАЕВ</Text>
            </View>
            <TouchableOpacity onPress={onDirection5Press} style={styles.one}>
              <Text style={styles.textTwo}>Посетить</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={styles.tow}>
              <Text style={styles.textOne}>1.ЯТТ ИССАЕВ</Text>
            </View>
            <TouchableOpacity onPress={onDirection5Press} style={styles.one}>
              <Text style={styles.textTwo}>Посетить</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 20}}>
            <DefaultButton text={'Уведомить об инкассации'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Direction3view;
