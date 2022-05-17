import React, {useEffect} from 'react';
import {View, Image, Platform, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import {styles} from './style';
const QrKodView = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const requestPermissions = async () => {
    try {
      const result = await check(PERMISSIONS.IOS.CAMERA);
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          await request(
            Platform.OS === 'android'
              ? PERMISSIONS.ANDROID.CAMERA
              : PERMISSIONS.IOS.CAMERA,
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    } catch (error) {}
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <DefaultImageBackground>
      {/* <Image
            style={{width: 150, height: 160}}
            source={require('../../assets/image/inkass3.png')}
          /> */}

      <View style={styles.qrKodContainer}>
        <View>
          <RNCamera style={{width: windowWidth, height: windowHeight}} />
        </View>
      </View>
    </DefaultImageBackground>
  );
};

export default QrKodView;
