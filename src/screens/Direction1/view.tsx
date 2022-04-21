import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowDown, ArrowUp, LoadingIcon} from '../../assets/icons/icons';
import {DROPDOWN_TYPES, useDirectionScreenHook} from './hooks';
import HeaderComponentOne from '../../components/header/HeaderOne';

const Direction1view = () => {
  let {HomePress, state, changeDropdown} = useDirectionScreenHook();

  return (
    <View style={styles.container}>
      <HeaderComponentOne text={'Направление 15'} />
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.dropDown}>
          <View style={{marginVertical: 20}}>
            <View style={{marginHorizontal: 20}}>
              <View style={styles.dropDownBox}>
                <DropDownPicker
                  placeholder="Выбрать город"
                  open={state[DROPDOWN_TYPES.CITY].visible}
                  value={state[DROPDOWN_TYPES.CITY].value}
                  items={state[DROPDOWN_TYPES.CITY].items}
                  setOpen={changeDropdown(DROPDOWN_TYPES.CITY, 'visible')}
                  setValue={changeDropdown(DROPDOWN_TYPES.CITY, 'value')}
                  setItems={changeDropdown(DROPDOWN_TYPES.CITY, 'items')}
                  zIndex={1}
                  zIndexInverse={1}
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
              </View>
              <View style={styles.dropDownBoxTwo}>
                <DropDownPicker
                  placeholder="Выбрать район"
                  open={state.region.visible}
                  value={state.region.value}
                  items={state.region.items}
                  setOpen={changeDropdown(DROPDOWN_TYPES.REGION, 'visible')}
                  setValue={changeDropdown(DROPDOWN_TYPES.REGION, 'value')}
                  setItems={changeDropdown(DROPDOWN_TYPES.REGION, 'items')}
                  zIndex={0}
                  zIndexInverse={0}
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
              </View>
              <View style={styles.dropDownBoxThree}>
                <DropDownPicker
                  placeholder="Выбрать район"
                  open={state[DROPDOWN_TYPES.ROUTE].visible}
                  value={state[DROPDOWN_TYPES.ROUTE].value}
                  items={state[DROPDOWN_TYPES.ROUTE].items}
                  setOpen={changeDropdown(DROPDOWN_TYPES.ROUTE, 'visible')}
                  setValue={changeDropdown(DROPDOWN_TYPES.ROUTE, 'value')}
                  setItems={changeDropdown(DROPDOWN_TYPES.CITY, 'items')}
                  zIndex={0}
                  zIndexInverse={0}
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
              </View>
            </View>
            <TouchableOpacity onPress={HomePress} style={styles.loading}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <LoadingIcon />
                </View>
                <View style={styles.buttonBox}>
                  <Text style={styles.buttonText}>
                    Список сегодняшних клиентов
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Direction1view;
