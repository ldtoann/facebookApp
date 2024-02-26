import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Story_Image: {
    height: 180,
    width: 110,
    borderRadius: 15,
    objectFit: 'cover',
  },
  story_list: {
    paddingVertical: 10,
  },
  story_item: {
    paddingHorizontal: 4,
    position: 'relative',
  },
  story_icon: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    left: 4,
  },
  myStory_add: {
    position: 'relative',
    alignItems: 'center',
  },
  overbg: {
    backgroundColor: '#343436',
    height: 60,
    width: 110,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  story_icon_Font: {
    padding: 5,
    backgroundColor: '#343436',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 1,
    top: -19,
  },
  story_icon_plus: {
    fontSize: 30,
    color: '#405de6',
  },
  story_icon_content: {
    position: 'absolute',
    color: 'white',
    zIndex: 1,
    bottom: 12,
    fontWeight: '700',
    fontSize: 13,
  },
  story_namee: {
    fontSize: 13,
    color: 'white',
    position: 'absolute',
    bottom: 12,
    left: 12,
    fontWeight: '700',
    zIndex: 2,
  },
  Story_Overlay: {
    height: 165,
    width: 110,
    top: 15,
    left: 4,
    zIndex: 1,
    position: 'absolute',
    borderRadius: 15,
  },
  Story_Avatar: {
    position: 'absolute',
    top: 6,
    left: 10,
    height: 35,
    width: 35,
    objectFit: 'cover',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#139FF9',
  },
});
export default styles;
