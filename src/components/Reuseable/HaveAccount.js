import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const HaveAccount = ({children, title, color, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <Text style={{color: Colors.Gray, fontSize: 15}}>{children}</Text>
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <Text style={[styles.link, {color: color}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HaveAccount;

const styles = StyleSheet.create({
  link: {
    fontWeight: '500',
    fontSize: 16,
  },
});
