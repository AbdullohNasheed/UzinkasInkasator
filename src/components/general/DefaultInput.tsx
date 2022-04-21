import React from 'react';
import {KeyboardAvoidingView, KeyboardTypeOptions} from 'react-native';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export interface DefaultInputProps {
  placeholder: string;
  icon: (props: any) => JSX.Element;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChange?: (e: string) => void;
  hasError?: boolean;
}

const DefaultInput = ({
  icon,
  placeholder,
  onChange,
  value,
  hasError,
}: DefaultInputProps) => {
  let Icon = icon;
  return (
    <View>
      <View style={[styles.inputContainer, hasError && styles.errorContainer]}>
        <Icon style={styles.iconStyles} fill={hasError ? 'red' : '#009899'} />
        <TextInput
          keyboardType="default"
          placeholderTextColor={'rgba(62, 62, 62, 1)'}
          placeholder={placeholder}
          style={styles.registerIcon}
          onChangeText={onChange}
          value={value}
        />
      </View>
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  registerIcon: {
    fontSize: 19,
    width: '80%',
    marginVertical: Platform.OS === 'ios' ? 20 : 6,
    color: '#fff',
  },
  inputContainer: {
    backgroundColor: '#242531',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 10,
    elevation: 10,
  },
  iconStyles: {
    marginHorizontal: 10,
  },
  errorContainer: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
