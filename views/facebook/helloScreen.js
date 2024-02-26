import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HelloScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('login'); // Chuyển hướng đến màn hình chính
    }, 3000); // 3000 milliseconds = 3 giây
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#3B5999'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
        // style={{
        //   backgroundColor: 'white',
        //   width: 70,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   height: 70,
        //   borderRadius: 50,
        // }}
        >
          <Text
            style={{
              fontSize: 780,
              // color: '#3B5999',
              color: 'white',
              fontWeight: '800',
              marginLeft: 100,
              // paddingBottom: 100,
            }}>
            f
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HelloScreen;
