import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  NavMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#242526',
    backgroundColor: '#111111',
  },
  Menu_tab_Active: {
    alignItems: 'center',
    flex: 1,
    height: 'auto',
    borderTopWidth: 1.5,
    borderColor: '#216BFF',
    paddingVertical: 10,
  },
  Menu_tab: {
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1.5,
    borderColor: '#242526',
  },
  Menu_tab_Icon: {},
  Menu_tab_Icon_IconIcon: {
    fontSize: 23,
    // color: '#216BFF',
    color: 'white',
  },
  Menu_tab_Text: {
    fontSize: 10,
    // color: '#216BFF',
    color: 'white',
  },
  // activeIcon: {
  //   fontSize: 23,
  //   color: '#216BFF',
  // },
  // activeText: {
  //   fontSize: 10,
  //   color: '#216BFF',
  // },
  Menu_tab_Icon_IconIcon_active: {
    color: '#216BFF',
  },
  Menu_tab_Text_active: {
    color: '#216BFF',
  },
});
export default styles;
