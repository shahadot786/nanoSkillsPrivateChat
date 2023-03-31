import React from 'react';
import NavigationStrings from '../constants/NavigationStrings';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import OtpScreen from '../screens/Auth/OtpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import GetStartedScreen from '../screens/Auth/GetStartedScreen';

const AuthStack = Stack => {
  return (
    <>
      {/* <Stack.Screen name="Flash" component={Flash} /> */}
      <Stack.Screen
        name={NavigationStrings.GetStartedScreen}
        component={GetStartedScreen}
      />
      <Stack.Screen
        name={NavigationStrings.SignInScreen}
        component={SignInScreen}
      />
      <Stack.Screen
        name={NavigationStrings.SignUpScreen}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={NavigationStrings.ForgotPassScreen}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={NavigationStrings.ResetPassScreen}
        component={ResetPasswordScreen}
      />
      <Stack.Screen name={NavigationStrings.OtpScreen} component={OtpScreen} />
    </>
  );
};

export default AuthStack;
