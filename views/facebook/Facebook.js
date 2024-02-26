import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import Header from '../../components/header/index';
import Menu from '../../components/menu/index';
import PostList from '../../components/postList/Index';
import Story from '../../components/story/index';
const Facebook = ({navigation}) => {
  const navigateGoFacebook = () => {
    navigation.navigate('Facebook');
  };
  const navigateGoVideo = () => {
    navigation.navigate('Video');
  };
  const navigateGoFriends = () => {
    navigation.navigate('Friends');
  };
  const navigateGoProfile = () => {
    navigation.navigate('Profile');
  };
  const navigateGoNotification = () => {
    navigation.navigate('Notification');
  };
  const navigateGoSetting = () => {
    navigation.navigate('setting');
  };
  // const navigateGoAlbum = () => {
  //   navigation.navigate('Album');
  // };

  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];

  const renderItem = ({item}) => {
    if (item.type === 'NoScroll') {
      return (
        <View style={styles.AddNews}>
          <View style={styles.AddNews_Left}>
            <Image
              style={styles.AddNews_Left_Avatar}
              source={require('../../src/public/avatar.png')}
            />
            <Text style={styles.AddNews_Left_Text}>Bạn đang nghĩ gì ?</Text>
          </View>
          <View style={styles.AddNews_right}>
            <Text style={styles.StyleIcon}>
              <FontAwesome
                style={styles.AddNews_right_Icon}
                icon={SolidIcons.images}
              />
            </Text>
          </View>
        </View>
      );
    } else if (item.type === 'Scroll') {
      return (
        <View style={styles.NewsFeed}>
          <View style={styles.NewsFeed_NewsStory}>
            <Story />
          </View>
          <PostList />
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Menu
        goFacebookPage={navigateGoFacebook}
        goVideoPage={navigateGoVideo}
        goFriendsPage={navigateGoFriends}
        goProfilePage={navigateGoProfile}
        goNotificationPage={navigateGoNotification}
        goSettingPage={navigateGoSetting}
      />
    </SafeAreaView>
  );
};
export default Facebook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242526',
    paddingHorizontal: 5,
  },
  Logo: {
    width: 150,
    height: 60,
    objectFit: 'cover',
  },
  SearchMessengerPlus: {
    flexDirection: 'row',
  },
  BgIcon: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  StyleIcon: {},
  IconIcon: {
    color: '#5c5f61',
    fontSize: 20,
  },
  scrollView: {
    // backgroundColor: '#f1f8fc',
    backgroundColor: '#000000',
  },
  AddNews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242526',
    paddingHorizontal: 15,
    // marginTop: 2,
  },
  AddNews_Left: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AddNews_Left_Avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
  },
  AddNews_Left_Text: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  AddNews_right: {},
  AddNews_right_Icon: {
    fontSize: 25,
    color: '#128d0e',
  },
  NewsFeed: {},
  NewsFeed_NewsStory: {
    backgroundColor: '#242526',
    marginVertical: 2,
  },
  NewsFeed_NewsPost: {},
  text: {
    fontSize: 42,
    color: 'grey',
  },
});
