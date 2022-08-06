import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import DropDownPicker from 'react-native-dropdown-picker';
import {ArrowDown, ArrowUp, LoadingIcon} from '../../assets/icons/icons';
import {DROPDOWN_TYPES, useDirectionScreenHook} from './hooks';
import HeaderComponentOne from '../../components/header/HeaderOne';

const Direction1view = () => {
  let {HomePress, state, changeDropdown, active} = useDirectionScreenHook();
  return (
    <View style={styles.container}>
      <HeaderComponentOne text={`Направление `} />
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.dropDown}>
          <View style={{marginVertical: 20, paddingBottom: 130}}>
            <View style={{}}>
              <View style={styles.dropDownBox}>
                <DropDownPicker
                  placeholder="не выбрано"
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
                  placeholder="не выбрано"
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
                  placeholder="не выбрано"
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
              <View style={{marginTop: 50}}>
                <TouchableOpacity
                  disabled={!active}
                  onPress={HomePress}
                  style={active ? styles.style1 : styles.style2}>
                  <Text style={active ? styles.style1Text : styles.style2Text}>
                    Список клиентов
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Direction1view;
