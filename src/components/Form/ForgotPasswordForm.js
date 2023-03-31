import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomFormInputHook from './CustomFormInputHook';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import NavigationStrings from '../../constants/NavigationStrings';
import CustomButton from '../Button/CustomButton';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPasswordForm = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const [isLoading, setIsLoading] = useState(false);

  const onResetPressed = async data => {
    setIsLoading(true);
    navigation.navigate(NavigationStrings.ResetPassScreen);
    setIsLoading(false);
  };
  //end method

  return (
    <>
      <View style={styles.input}>
        <CustomFormInputHook
          iconName={'envelope'}
          name="email"
          placeholder="Your Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        {/* Buttons */}
        <View style={styles.button}>
          <CustomButton
            backgroundColor={Colors.Primary}
            color={Colors.White}
            onPress={handleSubmit(onResetPressed)}>
            Reset Password
          </CustomButton>
        </View>
      </View>
      <View style={styles.loading}>
        {isLoading && <ActivityIndicator size={30} color={Colors.Primary} />}
      </View>
    </>
  );
};

export default ForgotPasswordForm;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
  },
  loading: {
    alignItems: 'center',
  },
});
