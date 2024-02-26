import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  bg_login: {
    height: '100%',
    width: '100%',
  },
  section_login: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3B5999',
  },
  from_login: {
    width: '100%',
    marginTop: 0.25 * windowHeight,
    alignItems: 'center',
  },
  section_logo_logo: {
    fontSize: 50,
    fontWeight: '800',
    color: 'white',
    marginBottom: 40,
  },
  section_input: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    // backgroundColor: 'white',
  },
  box_input: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 5,
    borderColor: 'gray',
    elevation: 20,
    shadowColor: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  input: {
    height: 60,
    width: '83%',
    margin: 12,
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  icon_eye: {
    fontSize: 20,
  },
  section_button: {
    width: '90%',
  },
  section_button_login: {
    backgroundColor: '#4F69A2',
    borderRadius: 7,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // Các thuộc tính shadow:
    shadowColor: 'black',
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 5, // Thêm elevation để hỗ trợ Android
  },
  section_button_login_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  },
  section_more: {
    marginTop: 220,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  section_more_register: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
});
export default styles;
