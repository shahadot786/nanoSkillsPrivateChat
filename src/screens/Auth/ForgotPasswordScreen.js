import {View, StyleSheet} from 'react-native';
import React from 'react';
import Heading from '../../components/Reuseable/Heading';
import Description from '../../components/Reuseable/Description';
import ForgotPasswordForm from '../../components/Form/ForgotPasswordForm';
import Colors from '../../constants/Colors';
import HaveAccount from '../../components/Reuseable/HaveAccount';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* heading */}
      <Heading color={Colors.Black} fontSize={24}>
        Forgot Password!
      </Heading>
      <Description fontSize={15}>Reset your password!</Description>
      {/* form */}
      <ForgotPasswordForm />
      {/* remember pass */}
      <HaveAccount
        onPress={() => navigation.navigate(NavigationStrings.SignInScreen)}
        title={'Login'}
        color={Colors.Primary}
        textColor={Colors.DarkGray}>
        Remember your password!
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
export default ForgotPasswordScreen;
