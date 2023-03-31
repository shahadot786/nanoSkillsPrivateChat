import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const StoriesCard = data => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{marginTop: 10, marginRight: 10}}>
        <ImageBackground
          source={data?.data?.item?.image}
          style={{
            width: 80,
            height: 130,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{borderRadius: 20}}
          resizeMode="cover">
          <Text
            style={{
              color: Colors.White,
              bottom: 10,
              position: 'absolute',
              textAlign: 'center',
            }}>
            {data?.data?.item?.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default StoriesCard;

const styles = StyleSheet.create({});
