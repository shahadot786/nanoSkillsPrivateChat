import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomFormInputHook from './CustomFormInputHook';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import NavigationStrings from '../../constants/NavigationStrings';
import CustomButton from '../Button/CustomButton';
import CheckBoxContainer from '../Utils/CheckBoxContainer';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInForm = () => {
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
        iconName={'envelope'}
        name="email"
        placeholder="Your Email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />
      {/* <CustomFormInputHook
        number
        name="phone"
        placeholder="Your Phone Number"
        control={control}
        rules={{
          required: 'Phone Number is required',
          minLength: {
            value: 11,
            message: 'Phone Number should be at least 11 characters long',
          },
          maxLength: {
            value: 20,
            message: 'Phone Number should be max 20 characters long',
          },
        }}
      /> */}
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
      {/* forgot pass */}
      <View style={styles.forgot}>
        <CheckBoxContainer />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate(NavigationStrings.ForgotPassScreen)
          }>
          <Text style={styles.label}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      {/* Buttons */}
      <CustomButton
        backgroundColor={Colors.Primary}
        color={Colors.White}
        onPress={handleSubmit()}>
        Login
      </CustomButton>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
  },
  forgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  label: {
    color: Colors.DarkGray,
    marginTop: 5,
  },
  loading: {
    alignItems: 'center',
  },
});
