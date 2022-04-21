import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import DirectionStack from '../screens/Direction1/hooks';
import { Direction2Screen } from '../screens/Direction2';
import HomeStack from './HomeStack';

const img2 = require('../assets/image/Home.png');

const Tab = createBottomTabNavigator();
interface CustomTabBarBottonProps {
  onPress: any;
}

const CustomTabBarBotton = ({
  children,
  onPress,
}: PropsWithChildren<CustomTabBarBottonProps>) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={{
      top: Platform.OS === 'android' ? -35 : -15,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: Platform.OS === 'android' ? 80 : 93,
        height: Platform.OS === 'android' ? 80 : 93,
        borderRadius: 80,
        backgroundColor: 'rgba(0, 152, 153, 1)',
        elevation: 5,
        shadowColor: 'rgba(0, 152, 153, 1)',
        shadowRadius: 20,
        shadowOpacity: 0.3,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#181926'}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            height: 70,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#181926',
            borderTopWidth: 0,
            alignItems: 'center',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={DirectionStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={img2}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#fff' : '#000',
                  // backgroundColor: 'rgba(0, 152, 153, 1)',
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarBotton {...props} />,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0, 152, 153, 1)',
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
});
