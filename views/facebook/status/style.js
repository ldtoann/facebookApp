import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Status: {
    height: '100%',
    position: 'relative',
  },
  Status_Top: {
    height: 762,
    backgroundColor: '#1A1F24',
    position: 'relative',
  },
  Status_bottom_view: {
    height: 65,
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 10,
  },
  Status_bottom_input: {
    backgroundColor: 'gray',
    height: 45,
    width: 270,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 10,
  },
  Status_bottom_list_icon: {
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 3,
  },
  Status_ẹmoji_icon: {
    fontSize: 25,
  },
  bg_icon_heart: {
    backgroundColor: '#E51B35',
    paddingTop: 8,
    paddingLeft: 7,
    marginRight: 8,
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  Status_ẹmoji_icon_heart: {
    color: 'white',
  },
  bg_icon_like: {
    backgroundColor: '#1558ED',
    paddingTop: 5,
    paddingLeft: 8.5,
    marginRight: 8,
    borderRadius: 20,
    height: 40,
    width: 40,
    fontSize: 26,
  },
  Status_ẹmoji_icon_like: {
    color: 'white',
  },
  bg_icon_angry: {
    backgroundColor: 'white',
    paddingTop: 0.5,
    paddingLeft: 1.5,
    marginRight: 8,
    borderRadius: 20,
    height: 40,
    width: 40,
    fontSize: 38,
  },
  Status_ẹmoji_icon_angry: {
    color: '#E55406',
  },
  bg_icon_vang: {
    backgroundColor: 'white',
    paddingTop: 0.2,
    paddingLeft: 1.5,
    marginRight: 8,
    borderRadius: 20,
    height: 40,
    width: 40,
    fontSize: 38,
  },
  Status_ẹmoji_icon_vang: {
    color: '#FBCC5A',
  },
  Status_image: {},
  Status_image_story: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
  Status_name_top: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  Status_name_top_left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  Status_image_user: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  Status_user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  Status_user_name: {
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
  },
  Status_user_time: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    marginTop: 5,
  },
  Status_name_top_right: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 10,
    marginRight: -15,
  },
  Post_Icon_Edit_Edit: {
    fontSize: 18,
    color: 'white',
  },
  Post_Icon_Delete_Delete: {
    fontSize: 21,
    color: 'white',
  },
});

export default styles;
