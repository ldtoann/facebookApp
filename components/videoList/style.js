import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  Post_List: {
    paddingHorizontal: 10,
    backgroundColor: '#242526',
    marginTop: 2,
    paddingVertical: 10,
  },
  Post_List_Top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Post_List_Top_Left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Post_List_Top_Left_Image: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  Post_List_Top_Left_Image_Active: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#139FF9',
  },
  Post_List_Top_Left_Info: {
    marginLeft: 10,
  },
  Post_List_Top_Left_Name: {
    color: 'white',
  },
  Post_List_Top_Left_TimeIcon: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Post_List_Top_Left_Time: {
    color: 'white',
  },
  Post_List_Top_Left_Icon_Icon: {
    fontSize: 13,
  },
  Post_List_Top_Right: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  Post_List_Top_Edit: {
    marginRight: 10,
  },
  Post_Icon_Edit_Edit: {
    color: 'lightgray',
    fontSize: 14,
  },
  Post_List_Top_Delete: {
    marginRight: 10,
  },
  Post_Icon_Delete_Delete: {
    color: 'lightgray',
    fontSize: 17,
  },
  Post_List_Content: {},
  Post_Text: {
    color: 'white',
    marginVertical: 5,
    fontSize: 13,
  },
  Post_Image: {
    width: '100%',
    // height: 500,
    height: 395,
    objectFit: 'cover',
    marginTop: 5,
    borderRadius: 10,
  },
  Post_Content_Image_50: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  Post_Image_50: {
    width: '48.8%',
    // height: 500,
    height: 395,
    objectFit: 'cover',
    marginTop: 5,
    borderRadius: 10,
  },
  Post_Like_Cmt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  Post_Like: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  Post_Like_Like: {
    flexDirection: 'row',
    gap: -8,
  },
  Post_Icon_Like_Like: {
    backgroundColor: '#242526',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
    paddingVertical: 1,
    borderWidth: 3,
    borderColor: '#242526',
  },
  Post_Icon_Icon_Like: {
    color: '#139FF9',
    fontSize: 19,
  },
  Post_Icon_Icon_Love: {
    color: '#FDDD65',
    fontSize: 19,
  },
  Post_Icon_Icon_Heart: {
    color: '#EF3452',
    fontSize: 19,
  },
  Post_Sl_Like: {
    color: 'white',
    fontSize: 13,
  },
  Post_Cmt: {
    color: 'white',
    fontSize: 13,
  },
  Post_List_Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Post_Bottom_Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    // flex: 1,
    height: 'auto',
    marginVertical: 3,
  },
  Post_Icon_Icon: {
    color: 'white',
    fontSize: 20,
  },
  Post_Text_Text: {
    color: 'white',
    fontSize: 13,
  },
  Post_Icon_Icon_Active: {
    color: '#139FF9',
    fontSize: 20,
  },
  Post_Text_Text_Active: {
    color: '#139FF9',
    fontSize: 13,
  },
});

export default styles;
