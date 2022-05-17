import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import HeaderComponent from '../../components/header/Header';
import ReactNativeModal from 'react-native-modal';
import {styles} from './style';
import {CarbonIcon, Xicon} from '../../assets/icons/icons';
import {Direction4Hook} from './hooks';

const Direction4view = () => {
  const {route, setModalVisible, modalVisible, toggleVisibleModal} =
    Direction4Hook();

  return (
    <View style={styles.container}>
      <HeaderComponent text="Визит к клиенту" />
      <View style={styles.DirictionContaienr}>
        <View style={{alignItems: 'center', marginVertical: 25}}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: '#fff'}}>
            Банки
          </Text>
        </View>
        {route.map(e => {
          return (
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <View
                style={{
                  flex: 2,
                  backgroundColor: '#181926',
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#AA1B1B',
                    marginHorizontal: 20,
                    fontWeight: '600',
                    marginVertical: 18,
                  }}>
                  {e.name}
                </Text>
              </View>
              <TouchableOpacity
                onPress={toggleVisibleModal}
                style={{
                  flex: 1,
                  backgroundColor: '#181926',
                  marginHorizontal: 15,
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
                  Открыть
                </Text>
              </TouchableOpacity>
              <ReactNativeModal
                backdropOpacity={0.0}
                onBackdropPress={() => setModalVisible}
                isVisible={modalVisible}>
                <View style={styles.modalContainer}>
                  <View
                    style={{
                      height: '70%',
                      paddingHorizontal: 15,
                      backgroundColor: '#181927',
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}>
                    <View style={{alignItems: 'flex-end'}}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{
                          justifyContent: 'center',
                          height: 50,
                          width: 50,
                          // backgroundColor: 'red',
                          paddingTop: 10,
                          alignItems: 'flex-end',
                          // backgroundColor: 'red',
                        }}>
                        <Xicon />
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                      <ScrollView>
                        <View style={styles.bankDateBox}>
                          <Text style={styles.dateText}>{e.name}</Text>
                        </View>
                        <View style={styles.bankDateBox}>
                          <Text style={styles.dateText}>
                            {e.name_of_filial}
                          </Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#2b2c36',
                            marginVertical: 10,
                            paddingVertical: 8,
                            borderRadius: 6,
                          }}>
                          <Text style={styles.dateText}>{e.stir}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#2b2c36',
                            marginVertical: 10,
                            paddingVertical: 8,
                            borderRadius: 6,
                          }}>
                          <Text style={styles.dateText}>{e.created_at}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#2b2c36',
                            marginVertical: 10,
                            paddingVertical: 8,
                            borderRadius: 6,
                          }}>
                          <Text style={styles.dateText}>{e.updated_at}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#2b2c36',
                            marginVertical: 10,
                            paddingVertical: 8,
                            borderRadius: 6,
                          }}>
                          <Text style={styles.dateText}>{e.code}</Text>
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </ReactNativeModal>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default Direction4view;
