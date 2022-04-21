import React, {useState} from 'react';
import {View, Text, Platform, Button, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  ClockIcon,
  KalendarIcon,
  KalendarMiniIcon,
} from '../../assets/icons/icons';
import DefaultButton from '../../components/general/DefaultButton';
import DefaultInput from '../../components/general/DefaultInput';
import HeaderComponent from '../../components/header/Header';
import {useDirection6ScreenHook} from './hooks';
import {styles} from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';

const Direction6view = () => {
  let {onDirection5Press} = useDirection6ScreenHook();
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
                <Text style={styles.dateTimeText}>День</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxData}>
              <Text style={styles.text}>Время</Text>
              <TouchableOpacity
                style={styles.dataBox}
                onPress={() => setOpenn(true)}>
                <ClockIcon style={styles.iconBox} />
                <Text style={styles.dateTimeText}>Время</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>ЯТТ ИСАЕВ</Text>
          </View>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>8 000 000</Text>
          </View>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>Я0925</Text>
          </View>
          <View style={styles.fotterBox}>
            <Text style={styles.fotterText}>Ипотека 04001</Text>
          </View>
          <View style={styles.buttonBox}>
            <DefaultButton
              onPress={onDirection5Press}
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
