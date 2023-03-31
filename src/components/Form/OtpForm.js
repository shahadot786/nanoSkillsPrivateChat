import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomFormInputHook from './CustomFormInputHook';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import NavigationStrings from '../../constants/NavigationStrings';
import CustomButton from '../Button/CustomButton';

const OtpForm = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitPressed = async data => {
    setIsLoading(true);
    navigation.navigate(NavigationStrings.ResetPassScreen);
    setIsLoading(false);
  };
  //end method

  return (
    <>
      <View style={styles.input}>
        <CustomFormInputHook
          iconName={'phone'}
          name="phone"
          placeholder="Your OTP"
          control={control}
          rules={{
            required: 'OTP is required',
          }}
        />
        {/* Buttons */}
        <View style={styles.button}>
          <CustomButton
            backgroundColor={Colors.Primary}
            color={Colors.White}
            onPress={handleSubmit(onSubmitPressed)}>
            Verify & Proceed
          </CustomButton>
        </View>
      </View>
      <View style={styles.loading}>
        {isLoading && <ActivityIndicator size={30} color={Colors.Primary} />}
      </View>
    </>
  );
};

export default OtpForm;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
  },
  loading: {
    alignItems: 'center',
  },
});
