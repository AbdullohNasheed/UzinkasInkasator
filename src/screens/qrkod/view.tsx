import React, {useEffect} from 'react';
import {Dimensions, Platform, View} from 'react-native';
import Camera, {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import {styles} from './style';
import {requests} from '../../api/requests';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../navigation/ROUTES';

const QrKodView = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const route = useRoute();

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

  const navigation = useNavigation();

  const onQrScan = async (e: BarCodeReadEvent) => {
    console.log('ONSCAN', e.data);
    try {
      const res = await requests.order.getByHash(e.data);
      console.log(res.data);
      console.log(route.params);

      navigation.navigate(ROUTES.DIRECTION6, {
        order: route.params.order,
        pickedOrder: res.data,
      });
    } catch (error) {}
  };

  return (
    <DefaultImageBackground>
      {/* <Image
            style={{width: 150, height: 160}}
            source={require('../../assets/image/inkass3.png')}
          /> */}

      <View style={styles.qrKodContainer}>
        <View>
          <RNCamera
            onBarCodeRead={onQrScan}
            style={{width: windowWidth, height: windowHeight}}
          />
        </View>
      </View>
    </DefaultImageBackground>
  );
};

export default QrKodView;
