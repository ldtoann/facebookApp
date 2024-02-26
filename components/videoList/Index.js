import React, {useState} from 'react';
import {FlatList, Image, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome, {SolidIcons, BrandIcons} from 'react-native-fontawesome';
// import VideoPlayer from 'react-native-video-player';
import styles from './style';
const Index = () => {
  const [liked, setLiked] = useState(false);
  const postData = [
    {
      id: '01',
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      video: require('../../src/public/video1.mp4'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '02',
      name: 'Chilles',
      image: require('../../src/public/avatar2.png'),
      video: require('../../src/public/video1.mp4'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '03',
      name: 'Rap Replay',
      image: require('../../src/public/avatar3.png'),
      video: require('../../src/public/video1.mp4'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
    {
      id: '04',
      name: 'Le Duy Toan',
      image: require('../../src/public/avatar.png'),
      video: require('../../src/public/video1.mp4'),
      text: 'Đạo diễn Ross Duffer của Stranger Things mùa 5 khoe hình ảnh tại bãi đậu xe của phim trường chia ra hai khu vực là #TeamSteve hay là #TeamJonathan. Các cuồng sẽ chọn khu vực nào để đậu xe ?',
    },
  ];
  const renderPost = ({item, index}) => {
    return (
      <View style={styles.Post_List}>
        <View style={styles.Post_List_Top}>
          <View style={styles.Post_List_Top_Left}>
            <Image
              style={styles.Post_List_Top_Left_Image_Active}
              source={item.image}
            />
            <View style={styles.Post_List_Top_Left_Info}>
              <Text style={styles.Post_List_Top_Left_Name}>{item.name}</Text>
              <View style={styles.Post_List_Top_Left_TimeIcon}>
                <Text style={styles.Post_List_Top_Left_Time}>Vừa xong . </Text>
                <Text style={styles.Post_List_Top_Left_Icon}>
                  <FontAwesome
                    style={styles.Post_List_Top_Left_Icon_Icon}
                    icon={SolidIcons.globeAmericas}
                    color="white"
                  />
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.Post_List_Top_Right}>
            <View style={styles.Post_List_Top_Edit}>
              <Text style={styles.Post_Icon_Edit}>
                <FontAwesome
                  style={styles.Post_Icon_Edit_Edit}
                  icon={SolidIcons.edit}
                />
              </Text>
            </View>
            <View style={styles.Post_List_Top_Delete}>
              <Text style={styles.Post_Icon_Delete}>
                <FontAwesome
                  style={styles.Post_Icon_Delete_Delete}
                  icon={SolidIcons.times}
                />
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Post_List_Content}>
          <View style={styles.Post_Content_Text}>
            <Text style={styles.Post_Text}>{item.text}</Text>
          </View>
          <View style={styles.Post_Content_Image}>
            {/* <VideoPlayer video={require('../../src/public/video1.mp4')} /> */}
          </View>
          <View style={styles.Post_Like_Cmt}>
            <View style={styles.Post_Like}>
              <View style={styles.Post_Like_Like}>
                <View style={styles.Post_Icon_Like_Like}>
                  <FontAwesome
                    style={styles.Post_Icon_Icon_Like}
                    icon={SolidIcons.thumbsUp}
                  />
                </View>
                <View style={styles.Post_Icon_Like_Like}>
                  <FontAwesome
                    style={styles.Post_Icon_Icon_Love}
                    icon={SolidIcons.kissWinkHeart}
                  />
                </View>
                <View style={styles.Post_Icon_Like_Like}>
                  <FontAwesome
                    style={styles.Post_Icon_Icon_Heart}
                    icon={BrandIcons.gratipay}
                  />
                </View>
              </View>
              <Text style={styles.Post_Sl_Like}>999</Text>
            </View>
            <View>
              <Text style={styles.Post_Cmt}>4 Bình Luận</Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.Post_List_Bottom}>
          <View style={styles.Post_Bottom_Icon}>
            <TouchableOpacity
              style={styles.Post_Bottom_Icon}
              onPress={() => setLiked(!liked)}>
              <Text style={styles.Post_Icon}>
                <FontAwesome
                  style={[styles.Post_Icon_Icon, liked && {color: '#1877f2'}]}
                  icon={SolidIcons.thumbsUp}
                />
              </Text>
              <Text
                style={[styles.Post_Text_Text, liked && {color: '#1877f2'}]}>
                Thích
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Post_Bottom_Icon}>
            <Text style={styles.Post_Icon}>
              <FontAwesome
                style={styles.Post_Icon_Icon}
                icon={SolidIcons.comments}
              />
            </Text>
            <Text style={styles.Post_Text_Text}>Bình luận</Text>
          </View>
          <View style={styles.Post_Bottom_Icon}>
            <Text style={styles.Post_Icon}>
              <FontAwesome
                style={styles.Post_Icon_Icon}
                icon={BrandIcons.facebookMessenger}
              />
            </Text>
            <Text style={styles.Post_Text_Text}>Gửi</Text>
          </View>
          <View style={styles.Post_Bottom_Icon}>
            <Text style={styles.Post_Icon}>
              <FontAwesome
                style={styles.Post_Icon_Icon}
                icon={SolidIcons.share}
              />
            </Text>
            <Text style={styles.Post_Text_Text}>Chia sẻ</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View>
        <FlatList data={postData} renderItem={renderPost} />
      </View>
    </>
  );
};

export default Index;
