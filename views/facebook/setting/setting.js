import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome, {
  SolidIcons,
  BrandIcons,
  RegularIcons,
} from 'react-native-fontawesome';
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
  const handleGoProfile = () => {
    navigation.navigate('Profile');
  };
  const handlelLogout = () => {
    navigation.navigate('login');
  };
  const [showMore, setShowMore] = useState(false);
  const notificationData = [];
  const data = [
    {type: 'NoScroll'}, // Non-scrollable item
    ...notificationData.map(item => ({type: 'Scroll', ...item})), // Scrollable items
  ];
  const menuItems = [
    {icon: SolidIcons.clock, text: 'Kỷ niệm'},
    {icon: SolidIcons.bookmark, text: 'Đã lưu'},
    {icon: SolidIcons.users, text: 'Nhóm'},
    {icon: SolidIcons.video, text: 'Video'},
    {icon: SolidIcons.store, text: 'Marketplace'},
    {icon: SolidIcons.userFriends, text: 'Bạn bè'},
    {icon: SolidIcons.pager, text: 'Bảng feed'},
    {icon: SolidIcons.heart, text: 'Hẹn hò'},
    {icon: SolidIcons.userTie, text: 'Avatar'},
    {icon: SolidIcons.gamepad, text: 'Chơi game'},
    {icon: BrandIcons.facebookMessenger, text: 'Messenger kids'},
    {icon: SolidIcons.film, text: 'Reels'},
    {icon: SolidIcons.calendarDay, text: 'Sự kiện'},
    {icon: SolidIcons.flag, text: 'Trang'},
  ];
  const [showItems1, setShowItems1] = useState(false);
  const [showItems2, setShowItems2] = useState(false);
  const [showItems3, setShowItems3] = useState(false);
  const toggleShowItems1 = () => {
    setShowItems1(!showItems1);
  };
  const toggleShowItems2 = () => {
    setShowItems2(!showItems2);
  };
  const toggleShowItems3 = () => {
    setShowItems3(!showItems3);
  };
  const renderNotification = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return (
        <View style={styles.menuMain}>
          <View style={styles.menuAddUser}>
            <TouchableOpacity
              onPress={handleGoProfile}
              style={styles.menuAddUser_top}>
              <View style={styles.menuAddUser_top_left}>
                <Image
                  style={styles.menuAddUser_ava}
                  source={require('../../../src/public/avatar.png')}
                />
                <Text style={styles.menuAddUser_name}>Le Duy Toan</Text>
              </View>
              <View style={styles.menuAddUser_top_right}>
                <FontAwesome
                  style={styles.menuAddUser_icon}
                  icon={SolidIcons.chevronCircleDown}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuAddUser_bottom}>
              <FontAwesome
                style={styles.menuAddUser_icon}
                icon={SolidIcons.plusCircle}
              />
              <Text style={styles.menuAddUser_addnewuser}>
                Tạo trang cá nhân khác
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuLoiTat}>
            <Text style={styles.menuLoiTat_title}>Lối tắt của bạn</Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.menuLoiTat_list}>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava_group}
                      source={require('../../../src/public/avatar2.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.users}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>
                      Group team sneaker
                    </Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/duonghoangngocanh.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>
                      Duong Hoang Ngoc Anh
                    </Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/avatar.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>Le Duy Toan</Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/huongmo.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>Huong Mo</Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/khanhha.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>Khanh Ha</Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/khanhhuyen.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>Khanh Huyen</Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/nguyenngocthanhtam.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>
                      Nguyen Ngoc Thanh Tam
                    </Text>
                  </View>
                </View>
                <View style={styles.menuLoiTat_item}>
                  <View style={styles.menuLoiTat_item_top}>
                    <Image
                      style={styles.menuLoiTat_ava}
                      source={require('../../../src/public/sangtruong.png')}
                    />
                    <View style={styles.bg_menuLoiTat_icon}>
                      <FontAwesome
                        style={styles.menuLoiTat_icon}
                        icon={SolidIcons.userFriends}
                      />
                    </View>
                  </View>
                  <View style={styles.menuLoiTat_item_bottom}>
                    <Text style={styles.menuLoiTat_name}>Sang Truong</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.menuMenu}>
            {menuItems
              .slice(0, showMore ? menuItems.length : 8)
              .map((menuItem, index) => (
                <TouchableOpacity style={styles.menuMenu_item} key={index}>
                  <FontAwesome
                    style={styles.menuMenu_icon}
                    icon={menuItem.icon}
                  />
                  <Text style={styles.menuMenu_text}>{menuItem.text}</Text>
                </TouchableOpacity>
              ))}
            {menuItems.length > 8 && !showMore && (
              <TouchableOpacity
                style={styles.menuMenu_item_more}
                onPress={() => setShowMore(true)}>
                <Text style={styles.menuMenu_item_more_text}>Xem thêm</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.menu_more}>
            <View style={styles.menu_more_list}>
              <TouchableOpacity
                style={styles.menu_more_list_button}
                onPress={toggleShowItems1}>
                <View style={styles.menu_more_list_button_left}>
                  <FontAwesome
                    style={styles.menu_more_list_icon}
                    icon={SolidIcons.question}
                  />
                  <Text style={styles.menu_more_list_title}>
                    Trợ giúp & hỗ trợ
                  </Text>
                </View>
                <View style={styles.menu_more_list_button_right}>
                  <FontAwesome
                    style={styles.menu_more_list_icon_drop}
                    // icon={SolidIcons.chevronDown}
                    icon={
                      showItems1 ? SolidIcons.chevronUp : SolidIcons.chevronDown
                    }
                  />
                </View>
              </TouchableOpacity>
              {showItems1 && (
                <View>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.lifeRing}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Trung tâm trợ giúp
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.envelopeOpenText}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Hộp thư hỗ trợ
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.exclamationTriangle}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Báo cáo sự cố
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.userShield}
                    />
                    <Text style={styles.menu_more_items_text}>An toàn</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.journalWhills}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Điều khoản & chính sách
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.menu_more_list}>
              <TouchableOpacity
                style={styles.menu_more_list_button}
                onPress={toggleShowItems2}>
                <View style={styles.menu_more_list_button_left}>
                  <FontAwesome
                    style={styles.menu_more_list_icon}
                    icon={SolidIcons.cog}
                  />
                  <Text style={styles.menu_more_list_title}>
                    Cài đặt & quyền riêng tư
                  </Text>
                </View>
                <View style={styles.menu_more_list_button_right}>
                  <FontAwesome
                    style={styles.menu_more_list_icon_drop}
                    // icon={SolidIcons.chevronDown}
                    icon={
                      showItems2 ? SolidIcons.chevronUp : SolidIcons.chevronDown
                    }
                  />
                </View>
              </TouchableOpacity>
              {showItems2 && (
                <View>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.userCircle}
                    />
                    <Text style={styles.menu_more_items_text}>Cài đặt</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.link}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Lịch sử liên kết
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.lock}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Yêu cầu từ thiết bị
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.pager}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Hoạt động gần đây với quảng cáo
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={SolidIcons.creditCard}
                    />
                    <Text style={styles.menu_more_items_text}>
                      Đơn đặt hàng và thanh toán
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.menu_more_list}>
              <TouchableOpacity
                style={styles.menu_more_list_button}
                onPress={toggleShowItems3}>
                <View style={styles.menu_more_list_button_left}>
                  <FontAwesome
                    style={styles.menu_more_list_icon}
                    icon={SolidIcons.bars}
                  />
                  <Text style={styles.menu_more_list_title}>Cũng từ Meta</Text>
                </View>
                <View style={styles.menu_more_list_button_right}>
                  <FontAwesome
                    style={styles.menu_more_list_icon_drop}
                    // icon={SolidIcons.chevronDown}
                    icon={
                      showItems3 ? SolidIcons.chevronUp : SolidIcons.chevronDown
                    }
                  />
                </View>
              </TouchableOpacity>
              {showItems3 && (
                <View>
                  <TouchableOpacity style={styles.menu_more_items}>
                    <FontAwesome
                      style={styles.menu_more_items_icon}
                      icon={BrandIcons.whatsapp}
                    />
                    <Text style={styles.menu_more_items_text}>Whatsapp</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View style={styles.button_logout}>
            <TouchableOpacity style={styles.logout_btn} onPress={handlelLogout}>
              <Text style={styles.logout_btn_text}>Đăng xuất</Text>
            </TouchableOpacity>
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
        <Text style={styles.logo}>Menu</Text>
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
