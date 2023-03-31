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

const ResetPasswordForm = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const [isLoading, setIsLoading] = useState(false);

  // const onSignUpPressed = async data => {
  //   setIsLoading(true);
  //   setIsLoggedIn(true);
  //   const {name, email, phone, password, passwordConfirmation} = data;
  //   try {
  //     await register(name, email, phone, password, passwordConfirmation);
  //     navigation.replace(RouteName.bottomTab);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   setIsLoading(false);
  // };
  //end method

  return (
    <View style={styles.input}>
      <View style={styles.loading}>
        {isLoading && <ActivityIndicator size={30} color={Colors.Primary} />}
      </View>
      <CustomFormInputHook
        iconName={'lock'}
        //eye
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
        rules={{
          required: 'Password is required',
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,}$/i,
            message:
              'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
          },
          minLength: {
            value: 6,
            message: 'Password should minimum 6 characters long',
          },
        }}
      />
      <CustomFormInputHook
        iconName={'lock'}
        //eye
        name="confirm-password"
        placeholder="Confirm Password"
        control={control}
        secureTextEntry
        rules={{
          validate: value => value === pwd || 'Password do not match',
        }}
      />
      {/* Buttons */}
      <View style={styles.button}>
        <CustomButton
          backgroundColor={Colors.Primary}
          color={Colors.White}
          onPress={handleSubmit()}>
          Change Password
        </CustomButton>
      </View>
    </View>
  );
};

export default ResetPasswordForm;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
  },
  loading: {
    alignItems: 'center',
  },
});
