import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
const Index = () => {
  const FriendRequestData = [
    {
      id: '01',
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      mutualfriend: '15 bạn chung',
      friend1: require('../../src/public/post.png'),
      friend2: require('../../src/public/post2.png'),
      friend3: require('../../src/public/post3.png'),
    },
    {
      id: '02',
      name: 'Chilles',
      image: require('../../src/public/avatar2.png'),
      mutualfriend: '39 bạn chung',
      friend1: require('../../src/public/post3.png'),
      friend2: require('../../src/public/post4.png'),
      friend3: require('../../src/public/post2.png'),
    },
    {
      id: '03',
      name: 'Rap Reply',
      image: require('../../src/public/avatar3.png'),
    },
    {
      id: '04',
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      mutualfriend: '15 bạn chung',
      friend1: require('../../src/public/post.png'),
      friend2: require('../../src/public/post2.png'),
      friend3: require('../../src/public/post3.png'),
    },
    {
      id: '05',
      name: 'Chilles',
      image: require('../../src/public/avatar2.png'),
      mutualfriend: '39 bạn chung',
      friend1: require('../../src/public/post3.png'),
      friend2: require('../../src/public/post4.png'),
      friend3: require('../../src/public/post2.png'),
    },
    {
      id: '06',
      name: 'Rap Reply',
      image: require('../../src/public/avatar3.png'),
    },
    {
      id: '07',
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      mutualfriend: '15 bạn chung',
      friend1: require('../../src/public/post.png'),
      friend2: require('../../src/public/post2.png'),
      friend3: require('../../src/public/post3.png'),
    },
    {
      id: '08',
      name: 'Chilles',
      image: require('../../src/public/avatar2.png'),
      mutualfriend: '39 bạn chung',
      friend1: require('../../src/public/post3.png'),
      friend2: require('../../src/public/post4.png'),
      friend3: require('../../src/public/post2.png'),
    },
    {
      id: '09',
      name: 'Rap Reply',
      image: require('../../src/public/avatar3.png'),
    },
  ];
  const [friendRequests, setFriendRequests] = useState(FriendRequestData);
  const handleAccept = index => {
    setFriendRequests(prevRequests => {
      const newRequests = [...prevRequests];
      newRequests[index].isAccepted = true;
      return newRequests;
    });
  };
  const renderFriendRequest = ({item, index}) => {
    return (
      <View key={index} style={styles.Friends_List}>
        <View style={styles.Friends_Item}>
          <View style={styles.Friends_Item_Image}>
            <Image
              style={styles.Friends_Item_Image_Image}
              source={item.image}
            />
          </View>
          <View style={styles.Friends_Item_Content}>
            <View style={styles.Friend_Item_Content_Top}>
              <Text style={styles.Friends_Item_Content_Text}>
                <Text style={styles.Friends_Item_Content_Name}>
                  {item.name}
                </Text>
              </Text>
              <Text style={styles.Friends_Item_Content_Time}>13 minute</Text>
            </View>
            <View style={styles.Friends_Item_Content_Center}>
              {item.friend1 && item.friend2 && item.friend3 ? (
                <View
                  style={
                    styles.Friends_Item_Content_Center_MutualFriendContainer
                  }>
                  <View style={styles.Friends_Item_Content_Center_MutualFriend}>
                    <Image
                      style={styles.Friends_Item_Image_MutualFriend}
                      source={item.friend1}
                    />
                    <Image
                      style={styles.Friends_Item_Image_MutualFriend}
                      source={item.friend2}
                    />
                    <Image
                      style={styles.Friends_Item_Image_MutualFriend}
                      source={item.friend3}
                    />
                  </View>
                  {item.mutualfriend ? (
                    <Text style={styles.Friends_Item_Content_Sl_MutualFriend}>
                      {item.mutualfriend}
                    </Text>
                  ) : null}
                </View>
              ) : null}
            </View>
            <View style={styles.Friends_Item_Content_Bottom}>
              {item.isAccepted ? (
                <Text style={styles.Friend_Item_Content_Bottom_Text_Content}>
                  Lời mời được chấp nhận
                </Text>
              ) : (
                <View style={styles.Friend_Item_Content_Bottom_Button}>
                  <TouchableOpacity
                    style={styles.Friend_Item_Content_Bottom_Button1}
                    onPress={() => handleAccept(index)}>
                    <Text style={styles.Friend_Item_Content_Bottom_Text}>
                      Xác nhận
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.Friend_Item_Content_Bottom_Button2}
                    onPress={() => {
                      // Xử lý khi nút "Xóa" được nhấn
                    }}>
                    <Text style={styles.Friend_Item_Content_Bottom_Text}>
                      Xóa
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View>
        {friendRequests.length > 0 &&
          friendRequests.map((item, index) =>
            renderFriendRequest({item, index}),
          )}
      </View>
    </>
  );
};

export default Index;
