import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  ScrollView,
} from 'react-native';
import styles from './style';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const Status = ({route, navigation}) => {
  const {name, image, avatar} = route.params;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  useEffect(() => {
    let timer;
    if (!isTextInputFocused) {
      timer = setTimeout(() => {
        navigation.goBack();
      }, 10000000);
      Animated.timing(progress, {
        toValue: 5,
        duration: 10000,
        useNativeDriver: false,
      }).start();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [progress, isTextInputFocused, navigation]);
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  return (
    <View style={styles.Status}>
      <View style={styles.Status_Top}>
        <View style={{marginTop: 10, paddingHorizontal: 10}}>
          <Animated.View
            style={{
              height: '2%',
              backgroundColor: 'white',
              width: progressAnimation,
            }}></Animated.View>
          <View style={styles.Status_name_top}>
            <View style={styles.Status_name_top_left}>
              <Image source={avatar} style={styles.Status_image_user} />
              <View style={styles.Status_user}>
                <Text style={styles.Status_user_name}>{name}</Text>
                <Text style={styles.Status_user_time}>Vừa Xong</Text>
              </View>
            </View>
            <View style={styles.Status_name_top_right}>
              <FontAwesome
                style={styles.Post_Icon_Edit_Edit}
                icon={SolidIcons.edit}
              />
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome
                  style={styles.Post_Icon_Delete_Delete}
                  icon={SolidIcons.times}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.Status_image}>
          <Image source={image} style={styles.Status_image_story} />
        </View>
      </View>
      <ScrollView horizontal style={styles.Status_bottom_view}>
        <TextInput
          placeholder="Gửi tin nhắn..."
          placeholderTextColor="white"
          style={styles.Status_bottom_input}
          onFocus={() => setIsTextInputFocused(true)}
          onBlur={() => setIsTextInputFocused(false)}
        />
        <View style={styles.Status_bottom_list_icon}>
          <Text style={styles.bg_icon_heart}>
            <FontAwesome
              style={[styles.Status_ẹmoji_icon_heart, styles.Status_ẹmoji_icon]}
              icon={SolidIcons.heart}
            />
          </Text>
          <Text style={styles.bg_icon_like}>
            <FontAwesome
              style={styles.Status_ẹmoji_icon_like}
              icon={SolidIcons.thumbsUp}
            />
          </Text>
          <Text style={styles.bg_icon_vang}>
            <FontAwesome
              style={styles.Status_ẹmoji_icon_vang}
              icon={SolidIcons.grinSquint}
            />
          </Text>
          <Text style={styles.bg_icon_vang}>
            <FontAwesome
              style={styles.Status_ẹmoji_icon_vang}
              icon={SolidIcons.grinHearts}
            />
          </Text>
          <Text style={styles.bg_icon_vang}>
            <FontAwesome
              style={styles.Status_ẹmoji_icon_vang}
              icon={SolidIcons.surprise}
            />
          </Text>
          <Text style={styles.bg_icon_vang}>
            <FontAwesome
              style={styles.Status_ẹmoji_icon_vang}
              icon={SolidIcons.sadTear}
            />
          </Text>
          <Text style={styles.bg_icon_angry}>
            <FontAwesome
              style={styles.Status_ẹmoji_icon_angry}
              icon={SolidIcons.angry}
            />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Status;
