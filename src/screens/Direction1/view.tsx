import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowDown, ArrowUp, LoadingIcon} from '../../assets/icons/icons';
import {useDirectionScreenHook} from './hooks';
import {Direction2Screen} from '../Direction2';
const Direction1view = () => {
  const [openCity, setOpenCity] = useState(false);
  const [cityValue, setCityValue] = useState(null);
  const [cityItems, setCityItems] = useState([
    {label: 'Tashkent', value: 'tashkent'},
    {label: 'Andijon', value: 'andijon'},
    {label: 'Novoi', value: 'novoi'},
  ]);
  const [openDistr, setOpenDistr] = useState(false);
  const [distrValue, setDistrValue] = useState(null);
  const [distrItems, setDistrItems] = useState([
    {label: 'Tashkent', value: 'tashkent'},
    {label: 'Andijon', value: 'andijon'},
    {label: 'Novoi', value: 'novoi'},
  ]);

  const [openDirect, setOpenDirect] = useState(false);
  const [directValue, setDirectValue] = useState(null);
  const [directItems, setDirectItems] = useState([
    {label: 'Tashkent', value: 'tashkent'},
    {label: 'Andijon', value: 'andijon'},
    {label: 'Novoi', value: 'novoi'},
  ]);

  let {onDirection2Press} = useDirectionScreenHook();

  return (
    <View style={styles.container}>
      <HeaderComponent text={'Направление 15'} />
      <View style={styles.scrollContainer}>
        <View style={styles.dropDown}>
          <View style={{marginVertical: 20}}>
            <View style={{marginHorizontal: 20}}>
              <DropDownPicker
                placeholder="Выбрать город"
                open={openCity}
                value={cityValue}
                items={cityItems}
                setOpen={setOpenCity}
                setValue={setCityValue}
                zIndex={3000}
                zIndexInverse={1000}
                setItems={setCityItems}
                showArrowIcon={true}
                ArrowUpIconComponent={() => <ArrowUp />}
                ArrowDownIconComponent={() => <ArrowDown />}
                placeholderStyle={{color: '#848484'}}
                containerStyle={{
                  marginHorizontal: 20,
                  marginVertical: 15,
                  alignSelf: 'center',
                }}
                listItemLabelStyle={{color: '#848484', fontSize: 20}}
                textStyle={{fontSize: 20, color: '#fff'}}
                style={{
                  backgroundColor: '#181926',
                  borderWidth: 0,
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#181926',
                  borderWidth: 0,
                  paddingHorizontal: 10,
                }}
              />
              <DropDownPicker
                placeholder="Выбрать район"
                open={openDistr}
                value={distrValue}
                items={distrItems}
                setOpen={setOpenDistr}
                setValue={setDistrValue}
                setItems={setDistrItems}
                zIndex={2000}
                zIndexInverse={2000}
                showArrowIcon={true}
                ArrowUpIconComponent={() => <ArrowUp />}
                ArrowDownIconComponent={() => <ArrowDown />}
                placeholderStyle={{color: '#848484'}}
                containerStyle={{marginHorizontal: 20, alignSelf: 'center'}}
                listItemLabelStyle={{color: '#848484', fontSize: 20}}
                textStyle={{fontSize: 20, color: '#fff'}}
                style={{
                  backgroundColor: '#181926',
                  borderWidth: 0,
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#181926',
                  borderWidth: 0,
                  paddingHorizontal: 10,
                }}
              />
              <DropDownPicker
                placeholder="Выбрать маршрут"
                open={openDirect}
                value={directValue}
                items={directItems}
                setOpen={setOpenDirect}
                setValue={setDirectValue}
                setItems={setDirectItems}
                zIndex={1000}
                zIndexInverse={3000}
                showArrowIcon={true}
                ArrowUpIconComponent={() => <ArrowUp />}
                ArrowDownIconComponent={() => <ArrowDown />}
                placeholderStyle={{color: '#848484'}}
                containerStyle={{
                  marginHorizontal: 20,
                  marginVertical: 20,
                  alignSelf: 'center',
                }}
                listItemLabelStyle={{color: '#848484', fontSize: 20}}
                textStyle={{fontSize: 20, color: '#fff'}}
                style={{
                  backgroundColor: '#181926',
                  borderWidth: 0,
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                }}
                dropDownContainerStyle={{
                  backgroundColor: '#181926',
                  borderWidth: 0,
                  paddingHorizontal: 10,
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onDirection2Press} style={styles.loading}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
              marginVertical: 30,
            }}>
            <LoadingIcon style={{}} />
            <View style={{marginHorizontal: 20}}>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
                Загрузить
              </Text>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#fff'}}>
                справочник
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Direction1view;
