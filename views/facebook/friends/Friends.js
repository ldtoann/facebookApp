import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import Menu from '../../../components/menu/index';
import FriendRequestData from '../../../components/friendrequest/Index';
import styles from './style';

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
      return <View key={index} />;
    } else if (item.type === 'Scroll') {
      return (
        <View>
          <View style={styles.Notification_Title}>
            <Text style={styles.Notification_Title_Text}>Gợi ý</Text>
            <Text style={styles.Notification_Title_Text}>Bạn bè</Text>
          </View>
          <View style={styles.horizontalLine}>
            <View style={styles.Line}></View>
          </View>
          <View style={styles.Notification_Title2}>
            <Text style={styles.Notification_Title2_Text1}>
              Lời mời kết bạn
            </Text>
            <TouchableOpacity>
              <Text style={styles.Notification_Title2_Text2}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <FriendRequestData key={index} />
        </View>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <Text style={styles.logo}>Bạn bè</Text>
        <View style={styles.SearchMessengerPlus}>
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
