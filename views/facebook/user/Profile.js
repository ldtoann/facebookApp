import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome, {SolidIcons, BrandIcons} from 'react-native-fontawesome';
import Menu from '../../../components/menu/index';
import styles from './style';
import PostList from '../../../components/postList/Index';

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
  const handleGoAblum = () => {
    navigation.navigate('album');
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
          <View style={styles.info_user_anhbia}>
            <Image
              style={styles.anhbia}
              source={require('../../../src/public/post4.png')}
            />
            <View style={styles.overlayy}></View>
            <View style={styles.bg_camera_anhbia}>
              <FontAwesome
                style={styles.camera_anhbia}
                icon={SolidIcons.camera}
              />
            </View>
            <View style={styles.addanhbia}>
              <FontAwesome
                style={styles.iconaddanhbia}
                icon={SolidIcons.images}
              />
              <Text style={styles.addanhbia_text}>Thêm ảnh bìa</Text>
            </View>
          </View>
          <View style={styles.info_user_profile}>
            <View style={styles.info_user_profile_ava}>
              <Image
                style={styles.avatar_profile}
                source={require('../../../src/public/avatar.png')}
              />
              <View style={styles.bg_camera_avatar_profile}>
                <FontAwesome
                  style={styles.camera_anhbia}
                  icon={SolidIcons.camera}
                />
              </View>
            </View>
            <Text style={styles.info_user_profile_name}>Le Duy Toan</Text>
            <Text style={styles.info_user_profile_tieusu}>
              instagram : _Siwel13_
            </Text>
            <Text style={styles.info_user_profile_tieusu}>
              threats : lewissisme.__
            </Text>
            <Text style={styles.info_user_profile_tieusu1}>
              <FontAwesome icon={SolidIcons.rocket} /> {'  '}
              <FontAwesome icon={SolidIcons.rocket} /> {'  '}
              <FontAwesome icon={SolidIcons.rocket} />
            </Text>
            <TouchableOpacity style={styles.addstory}>
              <Text style={styles.addstory_text}>
                <FontAwesome icon={SolidIcons.plus} />
                {'  '} Thêm tin mới
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonchinhsua3cham}>
              <TouchableOpacity style={styles.buttonchinhsua3cham1}>
                <Text style={styles.addstory_text}>
                  <FontAwesome icon={SolidIcons.pen} />
                  {'  '} Chỉnh sửa trang cá nhân
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonchinhsua3cham2}>
                <Text style={styles.addstory_text}>
                  <FontAwesome icon={SolidIcons.ellipsisHh} />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine}>
              <View style={styles.Line}></View>
            </View>
          </View>
          <View style={styles.baivietreels}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.baiviettitle}>
              <View style={styles.baiviettitle_Texttt}>
                <Text style={styles.baiviettitle_Text_Active}>Bài Viết</Text>
              </View>
              <View style={styles.baiviettitle_Texttt}>
                <Text style={styles.baiviettitle_Text_Text}>Reels</Text>
              </View>
            </ScrollView>
            <View style={styles.horizontalLine}>
              <View style={styles.Line}></View>
            </View>
          </View>
          <View style={styles.chitiet}>
            <Text style={styles.chitiet_title}>Chi tiết</Text>
            <View style={styles.chitiet_content}>
              <FontAwesome
                style={styles.chitiet_icon1}
                icon={BrandIcons.instagram}
              />
              <Text style={styles.chitiet_text}>_Siwel13_</Text>
            </View>
            <View style={styles.chitiet_content}>
              <FontAwesome
                style={styles.chitiet_icon1}
                icon={BrandIcons.twitch}
              />
              <Text style={styles.chitiet_text}>lewissisme.__</Text>
            </View>
            <View style={styles.chitiet_content}>
              <FontAwesome
                style={styles.chitiet_icon}
                icon={SolidIcons.locationArrow}
              />
              <Text style={styles.chitiet_text}>Đến từ Huế</Text>
            </View>
            <View style={styles.chitiet_content}>
              <FontAwesome
                style={styles.chitiet_icon}
                icon={SolidIcons.heart}
              />
              <Text style={styles.chitiet_text}>Độc thân</Text>
            </View>
            <View style={styles.chitiet_content}>
              <FontAwesome style={styles.chitiet_icon} icon={SolidIcons.rss} />
              <Text style={styles.chitiet_text}>Có 999 người theo dõi</Text>
            </View>
            <View style={styles.chitiet_content}>
              <FontAwesome
                style={styles.chitiet_icon}
                icon={SolidIcons.ellipsisHh}
              />
              <Text style={styles.chitiet_text}>
                Xem thông tin giới thiệu của bạn
              </Text>
            </View>
            <TouchableOpacity style={styles.editprofile}>
              <Text style={styles.editprofile_text}>
                Chỉnh sửa chi tiết công khai
              </Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine}>
              <View style={styles.Line}></View>
            </View>
          </View>
          <View style={styles.friend}>
            <View style={styles.friend_top}>
              <View style={styles.friend_top_number_quantity}>
                <Text style={styles.friend_top_number_quantity_title}>
                  Bạn bè
                </Text>
                <Text style={styles.friend_top_number_quantity_text}>
                  2.345 Người bạn
                </Text>
              </View>
              <View style={styles.friend_top_searchFriend}>
                <Text style={styles.friend_top_searchFriend_text}>
                  Tìm bạn bè
                </Text>
              </View>
            </View>
            <View style={styles.friend_main}>
              <View style={styles.friend_main_item}>
                <Image
                  style={styles.friend_main_item_image}
                  source={require('../../../src/public/duonghoangngocanh.png')}
                />
                <Text style={styles.friend_main_item_name}>
                  Duong Hoang Ngoc Anh
                </Text>
              </View>
              <View style={styles.friend_main_item}>
                <Image
                  style={styles.friend_main_item_image}
                  source={require('../../../src/public/huongmo.png')}
                />
                <Text style={styles.friend_main_item_name}>Huong Mo</Text>
              </View>
              <View style={styles.friend_main_item}>
                <Image
                  style={styles.friend_main_item_image}
                  source={require('../../../src/public/nguyenngocthanhtam.png')}
                />
                <Text style={styles.friend_main_item_name}>
                  Nguyen Ngoc Thanh Tam
                </Text>
              </View>
              <View style={styles.friend_main_item}>
                <Image
                  style={styles.friend_main_item_image}
                  source={require('../../../src/public/khanhha.png')}
                />
                <Text style={styles.friend_main_item_name}>Khanh Ha</Text>
              </View>
              <View style={styles.friend_main_item}>
                <Image
                  style={styles.friend_main_item_image}
                  source={require('../../../src/public/khanhhuyen.png')}
                />
                <Text style={styles.friend_main_item_name}>Khanh Huyen</Text>
              </View>
              <View style={styles.friend_main_item}>
                <Image
                  style={styles.friend_main_item_image}
                  source={require('../../../src/public/sangtruong.png')}
                />
                <Text style={styles.friend_main_item_name}>Sang Truong</Text>
              </View>
            </View>
            <View style={styles.friend_bottom}>
              <TouchableOpacity style={styles.friend_bottom_button}>
                <Text style={styles.friend_bottom_button_text}>
                  Xem tất cả bạn bè
                </Text>
              </TouchableOpacity>
              <View style={styles.horizontalLine}>
                <View style={styles.Line}></View>
              </View>
            </View>
          </View>
          <View style={styles.baiviett}>
            <View style={styles.baiviettitlee}>
              <View>
                <Text style={styles.baiviett_titleleft}>Bài viết của bạn</Text>
              </View>
              <View>
                <Text style={styles.baiviett_titleright}>Bộ lọc</Text>
              </View>
            </View>
            <View style={styles.newbaiviet}>
              <View style={styles.avatarbaiviet}>
                <Image
                  style={styles.avatarbaiviet_avatar}
                  source={require('../../../src/public/avatar.png')}
                />
              </View>
              <View style={styles.inputbaiviet}>
                <TextInput
                  style={styles.inputbaiviet_input}
                  placeholder="Bạn đang nghĩ gì?"
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.imageaddbaiviet}>
                <FontAwesome
                  style={styles.Aimageaddbaiviet_Icon}
                  icon={SolidIcons.images}
                />
              </View>
            </View>
            <View style={styles.thuocphimphattructiep}>
              <View style={styles.thuocphim}>
                <FontAwesome
                  style={styles.thuocphim_Icon}
                  icon={SolidIcons.film}
                />
                <Text style={styles.thuocphim_text}>Thước phim</Text>
              </View>
              <View style={styles.thuocphim}>
                <FontAwesome
                  style={styles.thuocphim_Icon}
                  icon={SolidIcons.video}
                />
                <Text style={styles.thuocphim_text}>Phát trực tiếp</Text>
              </View>
              {/* <View style={styles.phattructiep}>
                <FontAwesome
                  style={styles.phattructiep_Icon}
                  icon={SolidIcons.video}
                />
                <Text style={styles.phattructiep_text}>Phát trực tiếp</Text>
              </View> */}
            </View>
            <View style={styles.quanlybaiviet}>
              <TouchableOpacity style={styles.quanlybaivietbutton}>
                <FontAwesome
                  style={styles.quanlybaiviet_Icon}
                  icon={SolidIcons.commentDots}
                />
                <Text style={styles.quanlybaiviet_text}>Quản lý bài viết</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.chuyenmuc}></View> */}
            <View style={styles.baivietlist}>
              <View style={styles.chuyenmuc}>
                <TouchableOpacity
                  style={styles.chuyenmuclist}
                  onPress={handleGoAblum}>
                  <FontAwesome
                    style={styles.chuyenmuclist_Icon}
                    icon={SolidIcons.images}
                  />
                  <Text style={styles.chuyenmuclist_text}>Ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.chuyenmuclist}>
                  <FontAwesome
                    style={styles.chuyenmuclist_Icon}
                    icon={SolidIcons.music}
                  />
                  <Text style={styles.chuyenmuclist_text}>Âm nhạc</Text>
                </TouchableOpacity>
              </View>
              <PostList />
            </View>
          </View>
        </View>
      );
    } else if (item.type === 'Scroll') {
      return <View></View>;
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <View style={styles.User_name}>
          <Text style={styles.name}>Le Duy Toan</Text>
          <FontAwesome style={styles.arrowdow} icon={SolidIcons.caretDown} />
        </View>
        <View style={styles.SearchMessengerPlus}>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <FontAwesome style={styles.IconIcon} icon={SolidIcons.pen} />
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
