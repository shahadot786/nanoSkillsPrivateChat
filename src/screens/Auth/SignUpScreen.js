import {View, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import Heading from '../../components/Reuseable/Heading';
import Description from '../../components/Reuseable/Description';
import SignUpForm from '../../components/Form/SignUpForm';
import HaveAccount from '../../components/Reuseable/HaveAccount';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import Images from '../../constants/Images';
import AppLogo from '../../components/Image/AppLogo';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Logo */}
        <AppLogo />
        {/* heading */}
        <Heading color={Colors.Black} fontSize={24}>
          Create Account
        </Heading>
        <Description fontSize={15}>
          Connect with your friends today!
        </Description>
        {/* form */}
        <SignUpForm />
        {/* have account */}
        <HaveAccount
          title={'Login'}
          textColor={Colors.DarkGray}
          color={Colors.Primary}
          onPress={() => navigation.navigate(NavigationStrings.SignInScreen)}>
          Already have an account?
        </HaveAccount>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
  },
});

export default SignUpScreen;
