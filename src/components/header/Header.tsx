import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {LeftIcon, LoadingIcon, MenuIcon} from '../../assets/icons/icons';
import { ROUTES } from '../../navigation/ROUTES';

export interface HeaderComponentProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  hasMenu?: boolean;
  hasImage?: boolean;
}

const HeaderComponent = ({
  hasMenu = false,
  hasImage = false,
  text,
}: HeaderComponentProps) => {
  let navigation = useNavigation();
  let onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerContainer}>
      {hasImage ? (
        <Image
          source={require('../../assets/image/inkass2.png')}
          style={styles.image}
        />
      ) : (
        <TouchableOpacity onPress={onBackPress}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{text}</Text>
      {hasMenu ? (
        <TouchableOpacity>
          <MenuIcon />
        </TouchableOpacity>
      ) : (
        <Image
          source={require('../../assets/image/inkass2.png')}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 45,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 30,
  },
});

export default HeaderComponent;
