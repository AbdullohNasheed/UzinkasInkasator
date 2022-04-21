import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {InnIcon, NotIcon, UserIcon} from '../../assets/icons/icons';
import DefaultImageBackground from '../../components/general/DefaultImageBackground';
import DefaultInput from '../../components/general/DefaultInput';
import {useLoginScreenData} from './hooks';
import {styles} from './style';
const LoginView = () => {
  let {onRegisterPress, handleChange, state, loading, error} =
    useLoginScreenData();
  return (
    <View style={styles.Container}>
      <DefaultImageBackground>
        <SafeAreaView style={styles.allContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Авторизация</Text>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultInput
              icon={UserIcon}
              placeholder={'Логин'}
              onChange={handleChange('name')}
              hasError={!!error}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <DefaultInput
              icon={InnIcon}
              placeholder="password"
              onChange={handleChange('password')}
              value={state.password}
              hasError={!!error}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
          <TouchableOpacity onPress={onRegisterPress} style={styles.buttonBox}>
            {loading ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text style={styles.buttonText}>Войти</Text>
            )}
          </TouchableOpacity>
        </SafeAreaView>
      </DefaultImageBackground>
    </View>
  );
};

export default LoginView;
