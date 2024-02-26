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
import FontAwesome, {SolidIcons, BrandIcons} from 'react-native-fontawesome';
import Menu from '../../../components/menu/index';
import styles from './style';
const Notification = ({navigation}) => {
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
  const notificationData = [
    {
      id: '01',
      name: 'Le Duy Toan',
      image: require('../../../src/public/avatar.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '02',
      name: 'Chilles',
      image: require('../../../src/public/avatar2.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '03',
      name: 'Rap Replay',
      image: require('../../../src/public/avatar3.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '04',
      name: 'Le Duy Toan',
      image: require('../../../src/public/avatar.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '05',
      name: 'Le Duy Toan',
      image: require('../../../src/public/avatar.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '06',
      name: 'Chilles',
      image: require('../../../src/public/avatar2.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '07',
      name: 'Rap Replay',
      image: require('../../../src/public/avatar3.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '08',
      name: 'Le Duy Toan',
      image: require('../../../src/public/avatar.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '09',
      name: 'Le Duy Toan',
      image: require('../../../src/public/avatar.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '10',
      name: 'Chilles',
      image: require('../../../src/public/avatar2.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '11',
      name: 'Rap Replay',
      image: require('../../../src/public/avatar3.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '12',
      name: 'Le Duy Toan',
      image: require('../../../src/public/avatar.png'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
  ];
  const data = [
    {type: 'NoScroll'}, // Non-scrollable item
    ...notificationData.map(item => ({type: 'Scroll', ...item})), // Scrollable items
  ];
  const renderNotification = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return (
        <View key={index} style={styles.Notification_Title}>
          <Text style={styles.Notification_Title_Text}>Mới nhất</Text>
        </View>
      );
    } else if (item.type === 'Scroll') {
      return (
        <View style={styles.Notification_List}>
          <View style={styles.Notification_Item}>
            <View style={styles.Notification_Item_Image}>
              <Image
                style={styles.Notification_Item_Image_Image}
                source={item.image}
              />
              <Text style={styles.Notification_Item_Image_Icon}>
                <FontAwesome
                  style={styles.Notification_Item_Image_Icon_Icon}
                  icon={SolidIcons.globeAmericas}
                />
              </Text>
            </View>
            <View style={styles.Notification_Item_Content}>
              <Text
                style={styles.Notification_Item_Content_Text}
                numberOfLines={3}
                ellipsizeMode="tail">
                <Text style={styles.Notification_Item_Content_Name}>
                  {item.name}
                </Text>{' '}
                đã {item.text}
              </Text>
              <Text style={styles.Notification_Item_Content_Time}>
                13 minute
              </Text>
            </View>
            <View style={styles.Notification_Item_Setting}>
              <Text style={styles.Notification_Item_Setting_Icon}>
                <FontAwesome
                  style={styles.Notification_Item_Setting_Icon_Icon}
                  icon={SolidIcons.edit}
                  color="white"
                />
              </Text>
            </View>
          </View>
        </View>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <Text style={styles.logo}>Thông báo</Text>
        <View style={styles.SearchMessengerPlus}>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <FontAwesome style={styles.IconIcon} icon={SolidIcons.cog} />
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
        renderItem={renderNotification}
        keyExtractor={item => item.id || item.type}
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
export default Notification;
