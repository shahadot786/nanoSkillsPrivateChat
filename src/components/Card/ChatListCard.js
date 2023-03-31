import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ChatListCard = data => {
  return (
    <TouchableOpacity
      style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={data.data.item.image}
        style={{width: 50, height: 50, borderRadius: 25}}
      />
      <Text style={{textAlign: 'center', marginLeft: 10}}>
        {data.data.item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ChatListCard;

const styles = StyleSheet.create({});
