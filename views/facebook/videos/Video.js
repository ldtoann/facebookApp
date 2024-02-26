import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import Menu from '../../../components/menu/index';
import VideoList from '../../../components/videoList/Index';
import styles from './style';
import {ScrollView} from 'react-native';

const Friends = ({navigation}) => {
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
  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];
  const renderItem = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return <View></View>;
    } else if (item.type === 'Scroll') {
      return (
        <View style={styles.NewsFeed}>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.Notification_Title}>
              <View style={styles.Notification_Title_Content_Texttt}>
                <Text style={styles.Notification_Title_Text_Active}>
                  Dành cho bạn
                </Text>
              </View>
              <View style={styles.Notification_Title_Content_Texttt}>
                <Text style={styles.Notification_Title_Text}>Trực tiếp</Text>
              </View>
              <View style={styles.Notification_Title_Content_Texttt}>
                <Text style={styles.Notification_Title_Text}>Chơi game</Text>
              </View>
              <View style={styles.Notification_Title_Content_Texttt}>
                <Text style={styles.Notification_Title_Text}>Reels</Text>
              </View>
              <View style={styles.Notification_Title_Content_Texttt}>
                <Text style={styles.Notification_Title_Text}>
                  Đang theo dõi
                </Text>
              </View>
            </ScrollView>
          </View>
          <VideoList />
        </View>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <Text style={styles.logo}>Video</Text>
        <View style={styles.SearchMessengerPlus}>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <FontAwesome style={styles.IconIcon} icon={SolidIcons.user} />
            </Text>
          </View>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <FontAwesome style={styles.IconIcon} icon={SolidIcons.search} />
            </Text>
          </View>
        </View>
      </View>
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

export default Friends;
