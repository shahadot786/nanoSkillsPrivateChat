import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppLogo from '../../components/Image/AppLogo';
import Heading from '../../components/Reuseable/Heading';
import Description from '../../components/Reuseable/Description';
import HaveAccount from '../../components/Reuseable/HaveAccount';
import Colors from '../../constants/Colors';
import OtpForm from '../../components/Form/OtpForm';

const OtpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* logo */}
      <AppLogo />
      {/* heading */}
      <Heading color={Colors.Black} fontSize={24}>
        OTP Verification
      </Heading>
      <Description fontSize={15}>
        We have sent the code verification to your registered mobile number
      </Description>
      {/* form */}
      <OtpForm />
      {/* remember pass */}
      <HaveAccount
        title={'Resend OTP'}
        color={Colors.Primary}
        textColor={Colors.DarkGray}>
        Don't receive the OTP?
      </HaveAccount>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
export default OtpScreen;
