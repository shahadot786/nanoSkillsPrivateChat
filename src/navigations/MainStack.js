import {View, Text} from 'react-native';
import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import TabRoutes from './TabRoutes';

const MainStack = Stack => {
  return (
    <Stack.Screen name={NavigationStrings.TabRoutes} component={TabRoutes} />
  );
};

export default MainStack;
