import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationStrings from '../constants/NavigationStrings';
import HomeScreen from '../screens/Home/HomeScreen';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: '#272727',
          // borderTopRightRadius: 10,
          // borderTopLeftRadius: 10,
          paddingHorizontal: 3,
          // bottom: 10,
          //   paddingBottom: 6,
          height: 60,
        },
      }}>
      <Tab.Screen
        name={NavigationStrings.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                {focused ? (
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    style={focused ? styles.activeTab : styles.menuTab}>
                    <Icon
                      name="home"
                      color={focused ? Colors.Primary : 'white'}
                      size={23}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <Icon
                      name="home"
                      color={focused ? Colors.Primary : 'white'}
                      size={23}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    position: 'absolute',
    borderColor: '#FFAD00',
    borderWidth: 1,
    // backgroundColor: '#ffffff7c',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTab: {
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#00000048',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabRoutes;
