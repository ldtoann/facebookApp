'use strict';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import styles from './style';

const Index = ({
  goFacebookPage,
  goVideoPage,
  goFriendsPage,
  goProfilePage,
  goNotificationPage,
  goSettingPage,
  LogOut,
}) => {
  const [activeTab, setActiveTab] = useState('facebook');
  const handlePress = tab => {
    setActiveTab(tab);
    switch (tab) {
      case 'Facebook':
        goFacebookPage();
        break;
      case 'Video':
        goVideoPage();
        break;
      case 'Friends':
        goFriendsPage();
        break;
      case 'Profile':
        goProfilePage();
        break;
      case 'Notification':
        goNotificationPage();
        break;
      case 'Setting':
        goSettingPage();
        break;
      // Các trang khác
      default:
        break;
    }
  };
  return (
    <View style={styles.NavMenu}>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Facebook' && styles.activeTab]}
        onPress={() => handlePress('Facebook')}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Facebook' && styles.activeIcon,
            ]}
            icon={SolidIcons.home}
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Facebook' && styles.activeText,
          ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Menu_tab}
        onPress={() => {
          goVideoPage();
        }}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={styles.Menu_tab_Icon_IconIcon}
            icon={SolidIcons.tv}
          />
        </Text>
        <Text style={styles.Menu_tab_Text}>Video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Friends' && styles.activeTab]}
        onPress={() => handlePress('Friends')}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Friends' && styles.activeIcon,
            ]}
            icon={SolidIcons.userFriends}
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Friends' && styles.activeText,
          ]}>
          Bạn bè
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Profile' && styles.activeTab]}
        onPress={() => handlePress('Profile')}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Profile' && styles.activeIcon,
            ]}
            icon={SolidIcons.userCircle}
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Profile' && styles.activeText,
          ]}>
          Trang cá nhân
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.Menu_tab,
          activeTab === 'Notification' && styles.activeTab,
        ]}
        onPress={() => handlePress('Notification')}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Notification' && styles.activeIcon,
            ]}
            icon={SolidIcons.bell}
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Notification' && styles.activeText,
          ]}>
          Thông báo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Setting' && styles.activeTab]}
        onPress={() => handlePress('Setting')}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Setting' && styles.activeIcon,
            ]}
            icon={SolidIcons.bars}
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Setting' && styles.activeText,
          ]}>
          Menu
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.Menu_tab}
        onPress={() => {
          LogOut();
        }}>
        <Text style={styles.Menu_tab_Icon}>
          <FontAwesome
            style={styles.Menu_tab_Icon_IconIcon}
            icon={SolidIcons.bars}
          />
        </Text>
        <Text style={styles.Menu_tab_Text}>Menu</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Index;
