import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';

const ScreenWidth = Dimensions.get('screen').width;
const ScreenHeight = Dimensions.get('screen').height;

const ImageRotateCom = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image1} source={Images.Avatar1} />
      <Image style={styles.image2} source={Images.Avatar2} />
      <Image style={styles.image3} source={Images.Avatar3} />
      <Image style={styles.image4} source={Images.Avatar4} />
    </View>
  );
};

export default ImageRotateCom;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    gap: 20,
    height: ScreenHeight / 2.4,
  },

  image1: {
    width: 70,
    height: 70,
    borderRadius: 15,
    transform: [{rotate: '5deg'}],
    position: 'absolute',
    right: ScreenWidth - 300,
    marginTop: 10,
  },
  image2: {
    width: 90,
    height: 90,
    borderRadius: 15,
    transform: [{rotate: '-20deg'}],
    position: 'absolute',
    right: ScreenWidth - 190,
    top: 50,
  },
  image3: {
    width: 120,
    height: 120,
    borderRadius: 15,
    transform: [{rotate: '10deg'}],
    position: 'absolute',
    right: ScreenWidth - 120,
    top: 180,
  },
  image4: {
    width: 200,
    height: 200,
    borderRadius: 15,
    transform: [{rotate: '-20deg'}],
    position: 'absolute',
    right: -10,
    top: 130,
  },
});
