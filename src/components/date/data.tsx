import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Button, Platform, TouchableOpacity, View } from 'react-native';
import {
    ClockIcon, KalendarMiniIcon
} from '../../assets/icons/icons';
import { useDirection6ScreenHook } from './hooks';


let { onDirection4Press, } = useDirection6ScreenHook();
const Date = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <View style={styles.dataContainer}>
                <TouchableOpacity style={styles.dataBox}>
                    <KalendarMiniIcon />
                    <Button onPress={showDatepicker} title="День" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.timeBox}>
                    <ClockIcon />
                    <Button onPress={showTimepicker} title="Время" />
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="spinner"
                // onChange={onChange}
                />
            )}
        </View>
    );
};

export default Date;
