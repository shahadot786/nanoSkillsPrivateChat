import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';
import Colors from '../../constants/Colors';
import StoriesCard from '../Card/StoriesCard';

const ImageStories = () => {
  const data = [
    {
      id: 1,
      name: 'Diana',
      image: Images.Female1,
    },
    {
      id: 2,
      name: 'Hasibul',
      image: Images.Male1,
    },
    {
      id: 3,
      name: 'Reza',
      image: Images.Male2,
    },
    {
      id: 4,
      name: 'Lubaba',
      image: Images.Female2,
    },
    {
      id: 5,
      name: 'Rahena',
      image: Images.Female4,
    },
    {
      id: 6,
      name: 'Shahadot',
      image: Images.Male3,
    },
    {
      id: 7,
      name: 'Shamima',
      image: Images.Female5,
    },
    {
      id: 8,
      name: 'Yeasear',
      image: Images.Male4,
    },
    {
      id: 9,
      name: 'Galib',
      image: Images.Male5,
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={item => <StoriesCard data={item} />}
      />
    </View>
  );
};

export default ImageStories;

const styles = StyleSheet.create({});
