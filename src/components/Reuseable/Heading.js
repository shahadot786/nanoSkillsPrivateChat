import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Heading = ({children, color, fontSize, icon}) => {
  return (
    <View style={{flexDirection: 'row', gap: 5}}>
      <Text style={[styles.heading, {fontSize: fontSize, color: color}]}>
        {children}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});
