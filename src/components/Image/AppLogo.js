import {View, Text, Image} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';

const AppLogo = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
      }}>
      <Image source={Images.Logo} style={{width: 100, height: 100}} />
    </View>
  );
};

export default AppLogo;
