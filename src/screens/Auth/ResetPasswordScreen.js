import {View, StyleSheet} from 'react-native';
import React from 'react';
import Heading from '../../components/Reuseable/Heading';
import Colors from '../../constants/Colors';
import Description from '../../components/Reuseable/Description';
import ResetPasswordForm from '../../components/Form/ResetPasswordForm';
import AppLogo from '../../components/Image/AppLogo';

const ResetPasswordScreen = () => {
  return (
    <View style={styles.container}>
      {/* logo */}
      <AppLogo />
      {/* heading */}
      <Heading color={Colors.Black} fontSize={24}>
        Create Password!
      </Heading>
      <Description fontSize={15}>Create a new password!</Description>
      {/* form */}
      <ResetPasswordForm />
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
export default ResetPasswordScreen;
