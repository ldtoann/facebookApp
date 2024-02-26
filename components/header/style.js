import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Navbar: {
    flexDirection: 'row', // Sắp xếp các phần tử con theo hàng ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    justifyContent: 'space-between', // Các phần tử con nằm cách nhau bằng khoảng trắng
    backgroundColor: '#242526',
    paddingHorizontal: 5,
  },
  // Logo: {
  //   width: 150,
  //   height: 60,
  //   objectFit: 'cover',
  // },
  logo: {
    color: 'white',
    fontSize: 35,
    fontWeight: '800',
    margin: 5,
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
});
export default styles;
