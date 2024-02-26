import {StyleSheet} from 'react-native';
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
  IconIcon: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  text: {
    fontSize: 42,
    color: 'grey',
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    paddingVertical: 10,
    margin: 5,
  },
  album_List: {
    flexDirection: 'row',
    width: '30%',
  },
  albumitem: {
    flexDirection: 'row',
  },
  albumitem_Image: {
    width: 100,
    height: 100,
  },
  menualbum: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242526',
    borderTopWidth: 1,
    borderTopColor: '#3E4042',
  },
  menualbum_select: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Notification_Title_Text: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
  },
  linedoc: {
    width: 1,
    height: '70%', // Chiều cao phù hợp
    backgroundColor: '#3E4042', // Màu sắc của đường kẻ
  },
});
export default styles;
