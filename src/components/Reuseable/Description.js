import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Description = ({children, color, fontSize}) => {
  return (
    <View>
      <Text style={[styles.description, {color: color, fontSize: fontSize}]}>
        {children}
      </Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  description: {
    lineHeight: 22,
    marginTop: 5,
    paddingHorizontal: 15,
  },
});
