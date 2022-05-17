import React from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface DefaultButtonProps {
  text?: string;
  onPress?: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const DefaultButton = ({
  text,
  style,
  textStyle,
  onPress = () => {},
}: DefaultButtonProps) => {
//   let containerStyle = styles.lightContainerStyle;
//   let textStyle = styles.lightText;

  return (
    <TouchableOpacity style={[styles.buttonContainer,style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
	buttonContainer:{
    paddingVertical: 13,
    marginHorizontal: 15,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: ' rgba(0, 152, 153, 1)',
    marginVertical: 15,
	},
	buttonText:{
    fontSize: 18,
    color: 'rgba(0, 152, 153, 1)',
    fontWeight: 'bold',
  },
  });
