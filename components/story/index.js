import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      avatar: require('../../src/public/post.png'),
    },
    {
      id: 2,
      name: 'Chilles',
      image: require('../../src/public/avatar2.png'),
      avatar: require('../../src/public/post2.png'),
    },
    {
      id: 3,
      name: 'Rap Replay',
      image: require('../../src/public/avatar3.png'),
      avatar: require('../../src/public/post3.png'),
    },
    {
      id: 4,
      name: 'Le Duy Toan',
      image: require('../../src/public/post4.png'),
      avatar: require('../../src/public/post4.png'),
    },
    {
      id: 5,
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      avatar: require('../../src/public/post.png'),
    },
    {
      id: 6,
      name: 'Chilles',
      image: require('../../src/public/avatar2.png'),
      avatar: require('../../src/public/post2.png'),
    },
    {
      id: 7,
      name: 'Rap Replay',
      image: require('../../src/public/avatar3.png'),
      avatar: require('../../src/public/post3.png'),
    },
    {
      id: 8,
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      avatar: require('../../src/public/post4.png'),
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.story_list}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('status', {
                name: data.name,
                image: data.image,
                avatar: data.avatar,
              })
            }>
            <View style={styles.story_item}>
              {data.id === 1 ? (
                <View style={styles.story_icon}>
                  <View style={styles.myStory_add}>
                    <Text style={styles.story_icon_Font}>
                      <FontAwesome
                        style={styles.story_icon_plus}
                        icon={SolidIcons.plusCircle}
                      />
                    </Text>
                    <Text style={styles.story_icon_content}>Tạo tin</Text>
                    <View style={styles.overbg}></View>
                  </View>
                </View>
              ) : null}
              <Image source={data.image} style={styles.Story_Image} />
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.65)',
                  'rgba(0, 0, 0, 0.85)',
                ]}
                style={styles.Story_Overlay}
              />
              <Text
                style={[
                  styles.story_namee,
                  {opacity: data.id !== 1 ? 1 : 0.5},
                ]}>
                {data.id !== 1 ? data.name : ''}
              </Text>
              {data.id !== 1 ? (
                <Image source={data.avatar} style={styles.Story_Avatar} />
              ) : null}
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
