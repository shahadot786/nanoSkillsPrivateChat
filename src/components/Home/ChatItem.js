import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Images from '../../constants/Images';
import StoriesCard from '../Card/StoriesCard';
import ChatListCard from '../Card/ChatListCard';

const ChatItem = () => {
  const data = [
    {
      id: 1,
      name: 'Diana',
      image: Images.Face1,
    },
    {
      id: 2,
      name: 'Hasibul',
      image: Images.Face2,
    },
    {
      id: 3,
      name: 'Reza',
      image: Images.Face3,
    },
    {
      id: 4,
      name: 'Lubaba',
      image: Images.Face4,
    },
    {
      id: 5,
      name: 'Rahena',
      image: Images.Face5,
    },
    {
      id: 6,
      name: 'Diana',
      image: Images.Face1,
    },
    {
      id: 7,
      name: 'Hasibul',
      image: Images.Face2,
    },
    {
      id: 8,
      name: 'Reza',
      image: Images.Face3,
    },
    {
      id: 9,
      name: 'Lubaba',
      image: Images.Face4,
    },
    {
      id: 10,
      name: 'Rahena',
      image: Images.Face5,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <FlatList
        //horizontal
        data={data}
        pagingEnabled
        snapToAlignment="center"
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={item => <ChatListCard data={item} />}
      />
    </View>
  );
};

export default ChatItem;
