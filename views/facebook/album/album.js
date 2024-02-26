import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
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
  const handleGoUser = () => {
    // navigation.navigate('Profile');
    navigation.goBack();
  };
  const albumData = [
    {
      id: '01',
      image: require('../../../src/public/avatar.png'),
    },
    {
      id: '02',
      image: require('../../../src/public/avatar2.png'),
    },
    {
      id: '03',
      image: require('../../../src/public/duonghoangngocanh.png'),
    },
    {
      id: '04',
      image: require('../../../src/public/huongmo.png'),
    },
    {
      id: '05',
      image: require('../../../src/public/khanhha.png'),
    },
    {
      id: '06',
      image: require('../../../src/public/khanhhuyen.png'),
    },
    {
      id: '07',
      image: require('../../../src/public/nguyenngocthanhtam.png'),
    },
    {
      id: '08',
      image: require('../../../src/public/post.png'),
    },
    {
      id: '09',
      image: require('../../../src/public/post2.png'),
    },
    {
      id: '10',
      image: require('../../../src/public/post3.png'),
    },
    {
      id: '11',
      image: require('../../../src/public/post4.png'),
    },
    {
      id: '12',
      image: require('../../../src/public/sangtruong.png'),
    },
    {
      id: '13',
      image: require('../../../src/public/avatar.png'),
    },
    {
      id: '14',
      image: require('../../../src/public/avatar2.png'),
    },
    {
      id: '15',
      image: require('../../../src/public/duonghoangngocanh.png'),
    },
    {
      id: '16',
      image: require('../../../src/public/huongmo.png'),
    },
    {
      id: '17',
      image: require('../../../src/public/khanhha.png'),
    },
    {
      id: '18',
      image: require('../../../src/public/khanhhuyen.png'),
    },
    {
      id: '19',
      image: require('../../../src/public/nguyenngocthanhtam.png'),
    },
    {
      id: '20',
      image: require('../../../src/public/post.png'),
    },
    {
      id: '21',
      image: require('../../../src/public/post2.png'),
    },
    {
      id: '22',
      image: require('../../../src/public/post3.png'),
    },
    {
      id: '23',
      image: require('../../../src/public/post4.png'),
    },
    {
      id: '24',
      image: require('../../../src/public/sangtruong.png'),
    },
    {
      id: '25',
      image: require('../../../src/public/duonghoangngocanh.png'),
    },
    {
      id: '26',
      image: require('../../../src/public/huongmo.png'),
    },
    {
      id: '27',
      image: require('../../../src/public/khanhha.png'),
    },
    {
      id: '28',
      image: require('../../../src/public/khanhhuyen.png'),
    },
    {
      id: '29',
      image: require('../../../src/public/nguyenngocthanhtam.png'),
    },
  ];
  const renderItem = ({item}) => (
    <View style={{width: '33.3%', padding: 1}}>
      <Image source={item.image} style={{width: '100%', height: 140}} />
    </View>
  );
  const renderHeader = () => (
    <View style={styles.menualbum}>
      <TouchableOpacity style={styles.menualbum_select}>
        <Text style={styles.Notification_Title_Text}>Ảnh có mặt bạn</Text>
      </TouchableOpacity>
      <View style={styles.linedoc}></View>
      <TouchableOpacity style={styles.menualbum_select}>
        <Text style={styles.Notification_Title_Text}>Ảnh đã tải lên</Text>
      </TouchableOpacity>
      <View style={styles.linedoc}></View>
      <TouchableOpacity style={styles.menualbum_select}>
        <Text style={styles.Notification_Title_Text}>Album</Text>
      </TouchableOpacity>
      <View style={styles.linedoc}></View>
      <TouchableOpacity style={styles.menualbum_select}>
        <Text style={styles.Notification_Title_Text}>Video</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <TouchableOpacity
          style={styles.SearchMessengerPlus}
          onPress={handleGoUser}>
          <FontAwesome style={styles.IconIcon} icon={SolidIcons.chevronLeft} />
        </TouchableOpacity>
        <Text style={styles.logo}>Ảnh của bạn</Text>
      </View>
      <FlatList
        data={albumData}
        renderItem={renderItem}
        keyExtractor={item => item.id || item.type}
        numColumns={3}
        ListHeaderComponent={renderHeader}
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
