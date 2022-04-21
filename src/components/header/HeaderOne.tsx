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
import {LoadingIcon, LogoAutIcon, MenuIcon} from '../../assets/icons/icons';

export interface HeaderComponentProps {
  text: string;
  style?: StyleProp<ViewStyle>;
}

const HeaderComponentOne = ({text}: HeaderComponentProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <LogoAutIcon />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <Image
        source={require('../../assets/image/inkass2.png')}
        style={styles.image}
      />
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

export default HeaderComponentOne;
