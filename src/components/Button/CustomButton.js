import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({children, color, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: color}]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
});
