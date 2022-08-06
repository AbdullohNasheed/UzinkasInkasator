import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ClockIcon,
  KalendarIcon,
  KalendarMiniIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultInput from '../../components/general/DefaultInput';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';
import {useCashAcceptanceScreenHook} from './hooks';

const CashAcceptance = () => {
  let {
    onDirection3Press,
    loading,
    currentTime,
    currentData,
    order,
    pickedOrder,
  } = useCashAcceptanceScreenHook();
  return (
    <View style={styles.container}>
      <HeaderComponent text={'Визит к клиенту'} />
      <ScrollView style={styles.scrollContainer}>
        <View style={{marginBottom: 130}}>
          <View style={styles.timeDateBox}>
            <View style={styles.boxData}>
              <Text style={styles.text}>День</Text>
              <View style={styles.dataBox}>
                <KalendarMiniIcon style={styles.iconBox} />
                <Text style={styles.dateTimeText}>{currentData}</Text>
              </View>
            </View>
            <View style={styles.boxData}>
              <Text style={styles.text}>Время</Text>
              <View style={styles.dataBox}>
                <ClockIcon style={styles.iconBox} />
                <Text style={styles.dateTimeText}>{currentTime}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.textInput}>Организация</Text>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>{order.client.name}</Text>
          </View>
          <Text style={styles.textInput}>Сумма</Text>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>
              {pickedOrder?.amount || order?.amount}
            </Text>
          </View>
          <Text style={styles.textInput}>Номер мешка</Text>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>
              {pickedOrder?.bag || order.client.bag}
            </Text>
          </View>
          <Text style={styles.textInput}>Реквезиты банка</Text>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>{order?.client?.bank_account}</Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              onPress={onDirection3Press}
              style={styles.buttonContainer}>
              {loading ? (
                <ActivityIndicator size={'large'} color={'white'} />
              ) : (
                <Text style={styles.buttonText}>Подтвердить</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        {/* <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
        {/* <DatePicker
          modal
          mode="time"
          open={openn}
          date={time}
          onConfirm={date => {
            setOpenn(false);
            setTime(date);
          }}
          onCancel={() => {
            setOpenn(false);
          }}
        /> */}
      </ScrollView>
    </View>
  );
};

export default CashAcceptance;
