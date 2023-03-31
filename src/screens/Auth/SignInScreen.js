import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HaveAccount from '../../components/Reuseable/HaveAccount';
import SignInForm from '../../components/Form/SignInForm';
import Description from '../../components/Reuseable/Description';
import Heading from '../../components/Reuseable/Heading';
import NavigationStrings from '../../constants/NavigationStrings';
import Colors from '../../constants/Colors';
import AppLogo from '../../components/Image/AppLogo';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* logo */}
        <AppLogo />
        {/* heading */}
        <Heading color={Colors.Black} fontSize={24} icon>
          Hi, Welcome Back!
        </Heading>
        <Description fontSize={15}>Again, you've been missed!</Description>
        {/* form */}
        <SignInForm />
        {/* have account */}
        <HaveAccount
          title={'Sign Up'}
          textColor={Colors.DarkGray}
          color={Colors.Primary}
          onPress={() => navigation.navigate(NavigationStrings.SignUpScreen)}>
          Don't have an account?
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
export default SignInScreen;
