import React from 'react';
import {Image, Text, View} from 'react-native';
import FontAwesome, {SolidIcons, BrandIcons} from 'react-native-fontawesome';
import styles from './style';

const index = () => {
  return (
    <View style={styles.Navbar}>
      <Text style={styles.logo}>facebook</Text>
      <View style={styles.SearchMessengerPlus}>
        <View style={styles.BgIcon}>
          <Text style={styles.StyleIcon}>
            <FontAwesome style={styles.IconIcon} icon={SolidIcons.plusCircle} />
          </Text>
        </View>
        <View style={styles.BgIcon}>
          <Text style={styles.StyleIcon}>
            <FontAwesome style={styles.IconIcon} icon={SolidIcons.search} />
          </Text>
        </View>
        <View style={styles.BgIcon}>
          <Text style={styles.StyleIcon}>
            <FontAwesome
              style={styles.IconIcon}
              icon={BrandIcons.facebookMessenger}
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default index;
