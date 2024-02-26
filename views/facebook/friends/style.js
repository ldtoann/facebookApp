import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  horizontalLine: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#242526',
  },
  Line: {
    height: 0.3,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#242526',
  },
  Navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#242526',
    paddingHorizontal: 5,
  },
  Logo: {
    width: 150,
    height: 60,
    objectFit: 'cover',
  },
  SearchMessengerPlus: {
    flexDirection: 'row',
  },
  BgIcon: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  StyleIcon: {},
  IconIcon: {
    color: '#5c5f61',
    fontSize: 20,
  },
  text: {
    fontSize: 42,
    color: 'grey',
  },
  logo: {
    color: 'white',
    fontSize: 35,
    fontWeight: '800',
    margin: 5,
  },
  Notification_Title: {
    backgroundColor: '#242526',
    flexDirection: 'row',
    paddingLeft: 10,
    gap: 10,
  },
  Notification_Title2: {
    backgroundColor: '#242526',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  Notification_Title_Text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 12,
    backgroundColor: '#494A54',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  Notification_Title2_Text1: {
    color: 'white',
    fontWeight: '700',
    fontSize: 22,
  },
  Notification_Title2_Text2: {
    color: '#2374E1',
    fontSize: 17,
    marginRight: 5,
  },
  Friends_List: {
    backgroundColor: '#242526',
  },
  Friends_Item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  Friends_Item_Image: {
    position: 'relative',
  },
  Friends_Item_Image_Image: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  Friends_Item_Image_Icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3B5999',
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 20,
  },
  Friends_Item_Image_Icon_Icon: {
    color: 'white',
    fontSize: 20,
  },
  Friends_Item_Content: {
    flex: 1,
    gap: 5,
  },
  Friend_Item_Content_Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Friends_Item_Content_Text: {
    color: 'white',
    fontSize: 15,
    maxHeight: 60,
  },
  Friends_Item_Content_Name: {
    fontWeight: '500',
    fontSize: 18,
  },
  Friends_Item_Content_Time: {
    color: 'gray',
    fontSize: 12,
  },
  // Friend_Item_Content_Bottom: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  Friend_Item_Content_Bottom_Button: {
    flexDirection: 'row',
    gap: 10,
  },
  Friend_Item_Content_Bottom_Button1: {
    width: 130,
    backgroundColor: '#2374E1',
    paddingVertical: 8,
    borderRadius: 5,
  },
  Friend_Item_Content_Bottom_Button2: {
    width: 130,
    backgroundColor: '#3A3B3C',
    paddingVertical: 8,
    borderRadius: 5,
  },
  Friend_Item_Content_Bottom_Text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  Friend_Item_Content_Bottom_Text_Content: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'left',
  },
  // Friend_Item_Content_Center: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  Friends_Item_Content_Center_MutualFriendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    gap: 5,
  },
  Friends_Item_Content_Center_MutualFriend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Friends_Item_Image_MutualFriend: {
    width: 30,
    height: 30,
    marginLeft: -7,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#242526',
  },
  Friends_Item_Content_Sl_MutualFriend: {
    fontSize: 13,
    color: 'white',
  },
});
export default styles;
