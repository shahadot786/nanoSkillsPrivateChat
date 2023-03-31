import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';
import SearchBar from 'react-native-dynamic-search-bar';
import Heading from '../../components/Reuseable/Heading';
import ImageStories from '../../components/Image/ImageStories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={{flexDirection: 'row', paddingTop: 10}}>
        <Image
          source={Images.Face1}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
        <Text
          style={{
            fontSize: 17,
            color: Colors.Black,
            marginLeft: 10,
            marginTop: 12,
            fontWeight: 'bold',
          }}>
          Amaliya Jaine
        </Text>
      </View>
      {/* search bar */}
      <View style={{marginTop: 10}}>
        <SearchBar
          placeholder="Search here"
          onChangeText={text => console.log(text)}
          backgroundColor="#fff"
          onSearchPress={() => console.log('Search Icon is pressed')}
          onPress={() => alert('onPress')}
        />
      </View>
      {/* fav */}
      <Heading fontSize={20}>Stories</Heading>
      {/* Stories */}
      <ImageStories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
  },
});

export default HomeScreen;
