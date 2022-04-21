import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/header/Header';
import {styles} from './style';

const VisitClintView = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent text="Визит к клиенту" />
      <View style={styles.scrollContainer}>
        <View style={styles.scroll}>
          <View style={styles.scrollBox}>
            <View style={styles.nameBox}>
              <Text style={styles.buttonText}>ЯТТ ИСАЕВ</Text>
            </View>
            <TouchableOpacity style={styles.buttonBox}>
              <View>
                <Text style={styles.buttonText}>
                  Уведомить клиента о получении наличных
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBox}>
              <Text style={styles.buttonText}>Окочание визита</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VisitClintView;
