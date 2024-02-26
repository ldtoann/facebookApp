import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  },
  Notification_Title_Text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 20,
  },
  Notification_List: {
    backgroundColor: '#242526',
  },
  Notification_Item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 110,
    gap: 10,
    padding: 10,
  },
  Notification_Item_Image: {
    position: 'relative',
  },
  Notification_Item_Image_Image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
  },
  Notification_Item_Image_Icon: {
    position: 'absolute',
    bottom: 7,
    right: -3,
    backgroundColor: '#3B5999',
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 20,
  },
  Notification_Item_Image_Icon_Icon: {
    color: 'white',
    fontSize: 20,
  },
  Notification_Item_Content: {
    flex: 1,
    gap: 10,
  },
  Notification_Item_Content_Text: {
    color: 'white',
    fontSize: 15,
    maxHeight: 60,
  },
  Notification_Item_Content_Name: {
    fontWeight: '900',
  },
  Notification_Item_Content_Time: {
    color: 'gray',
    fontSize: 13,
  },
});
export default styles;
