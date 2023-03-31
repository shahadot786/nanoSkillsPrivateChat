import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ImageRotateCom from '../../components/Image/ImageRotateCom';
import Colors from '../../constants/Colors';
import Heading from '../../components/Reuseable/Heading';
import Description from '../../components/Reuseable/Description';
import CustomButton from '../../components/Button/CustomButton';
import HaveAccount from '../../components/Reuseable/HaveAccount';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#38B48D', '#259E81', '#0D8173', '#03766F']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#38B48D" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*Image Component  */}
          <ImageRotateCom />
          {/* Heading */}
          <Heading color={Colors.White} fontSize={50}>
            Let's Get Started
          </Heading>
          {/* Description */}
          <Description color={Colors.Gray} fontSize={15}>
            Connect with each other with chatting or calling. Enjoy safe and
            private texting..
          </Description>
          {/* Button */}
          <View style={{marginTop: 35}}>
            <CustomButton
              color={Colors.Primary}
              backgroundColor={Colors.White}
              onPress={() =>
                navigation.navigate(NavigationStrings.SignUpScreen)
              }>
              Join Now
            </CustomButton>
          </View>
          {/* Have Account */}
          <HaveAccount
            title={'Login'}
            color={Colors.White}
            onPress={() => navigation.navigate(NavigationStrings.SignInScreen)}>
            Already have an account?
          </HaveAccount>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});

export default GetStartedScreen;
