import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../contexts/AuthContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [loginStatus, setLoginStatus] = useState(false); //null

  const dummyData = {
    data: {
      name: 'MD. Shahadot Hossain',
      email: 'shrhossain786@gmail.com',
      phone: '01751248567',
    },
  };
  return (
    <AuthContext.Provider value={dummyData}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!!loginStatus ? <>{MainStack(Stack)}</> : <>{AuthStack(Stack)}</>}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;
