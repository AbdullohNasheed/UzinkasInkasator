import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  ClockIcon,
  KalendarMiniIcon,
  PencelIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import HeaderComponent from '../../components/header/Header';
import {useDirection6ScreenHook} from './hooks';
import {styles} from './style';

const Direction6view = () => {
  let {
    onCashPress,
    currentTime,
    currentData,
    order,
    pcikedOrder: pickedOrder,
  } = useDirection6ScreenHook();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [openn, setOpenn] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderComponent text={'Визит к клиенту'} />
      <ScrollView style={styles.scrollContainer}>
        <View style={{marginBottom: 130}}>
          <View style={styles.timeDateBox}>
            <View style={styles.boxData}>
              <Text style={styles.text}>День</Text>
              <TouchableOpacity
                style={styles.dataBox}
                onPress={() => setOpen(true)}>
                <KalendarMiniIcon style={styles.iconBox} />
                <Text style={styles.dateTimeText}>{currentData}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxData}>
              <Text style={styles.text}>Время</Text>
              <TouchableOpacity
                style={styles.dataBox}
                onPress={() => setOpenn(true)}>
                <ClockIcon style={styles.iconBox} />
                <Text style={styles.dateTimeText}>{currentTime}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.textInput}>Организация</Text>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>{order.name}</Text>
          </View>
          <Text style={styles.textInput}>Сумма</Text>
          <View style={styles.fotterBox}>
            <TextInput>
              <Text style={styles.fotterText}>
                {pickedOrder?.amount || order.debt}
              </Text>
            </TextInput>
            <PencelIcon />
          </View>
          <Text style={styles.textInput}>Номер мешка</Text>
          <View style={styles.fotterBox}>
            <TextInput>
              <Text style={styles.fotterText}>
                {pickedOrder?.bag || order.number}
              </Text>
            </TextInput>
            <PencelIcon />
          </View>
          <Text style={styles.textInput}>Реквезиты банка</Text>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>{order?.bank?.name}</Text>
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              onPress={onCashPress}
              textStyle={{color: '#fff'}}
              text="Принять"
            />
          </View>
        </View>
        <DatePicker
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
        />
        <DatePicker
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
        />
      </ScrollView>
    </View>
  );
};

export default Direction6view;
