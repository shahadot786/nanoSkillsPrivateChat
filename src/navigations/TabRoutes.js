import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationStrings from '../constants/NavigationStrings';
import HomeScreen from '../screens/Home/HomeScreen';
import Colors from '../constants/Colors';
import CallScreen from '../screens/Home/CallScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';
import MenuScreen from '../screens/Home/MenuScreen';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: Colors.Black,
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
                      name="home" //ios-chatbubble
                      color={focused ? Colors.White : Colors.Primary}
                      size={24}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <Icon
                      name="home"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.CallScreen}
        component={CallScreen}
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
                      name="md-call"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <Icon
                      name="md-call"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.NotificationScreen}
        component={NotificationScreen}
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
                      name="ios-notifications"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <Icon
                      name="ios-notifications"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.MenuScreen}
        component={MenuScreen}
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
                      name="list"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
                    />
                  </Animatable.View>
                ) : (
                  <View style={focused ? styles.activeTab : styles.menuTab}>
                    <Icon
                      name="list"
                      color={focused ? Colors.White : Colors.Secondary}
                      size={24}
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
    // borderColor: '#FFAD00',
    // borderWidth: 1,
    backgroundColor: '#38b48d4b',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTab: {
    position: 'absolute',
    // borderColor: 'black',
    // borderWidth: 1,
    backgroundColor: '#09110e50',
    borderRadius: 100,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabRoutes;
