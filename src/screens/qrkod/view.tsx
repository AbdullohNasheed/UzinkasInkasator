import React from 'react';
import {View,Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import {styles} from './style';

const QrKodView = () => {
  return (
    <DefaultImageBackground>
      <SafeAreaView>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Image
            style={{width: 150, height: 160}}
            source={require('../../assets/image/inkass3.png')}
          />
        </View>
        <View style={styles.qrKodContainer}>
          <View style={{}}>
            <RNCamera style={{width: 200, height: 200,}} />
          </View>
        </View>
      </SafeAreaView>
    </DefaultImageBackground>
  );
};

export default QrKodView;
