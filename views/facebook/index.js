import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './user/Profile';
import Login from './dangnhap/login';
import Video from './videos/Video';
import Friends from './friends/Friends';
import Notification from './thongbao/Notification';
import Facebook from './Facebook';
import Album from './album/album';
import Setting from './setting/setting';
import Status from './status/status';
import HelloScreen from './helloScreen';

const Stack = createNativeStackNavigator();

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="helloScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Facebook" component={Facebook} />
        <Stack.Screen name="Video" component={Video} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="setting" component={Setting} />
        <Stack.Screen name="album" component={Album} />
        <Stack.Screen name="status" component={Status} />
        <Stack.Screen name="helloScreen" component={HelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent;

// import React, {useEffect} from 'react';
// import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Profile from './user/Profile';
// import Login from './dangnhap/login';
// import Video from './videos/Video';
// import Friends from './friends/Friends';
// import Notification from './thongbao/Notification';
// import Facebook from './Facebook';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import Status from './status/status';

// const RootComponent = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();

//   const getTabBarLabel = route => {
//     if (route.name === 'Facebook') {
//       return 'Trang chủ';
//     } else if (route.name === 'Video') {
//       return 'Video';
//     } else if (route.name === 'Friends') {
//       return 'Bạn bè';
//     } else if (route.name === 'Profile') {
//       return 'Hồ sơ';
//     } else if (route.name === 'Notification') {
//       return 'Thông báo';
//     } else if (route.name === 'login') {
//       return 'Đăng nhập';
//     }
//     return '';
//   };

//   const BottomTabScreen = () => {
//     return (
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerShown: false,
//           tabBarStyle: {
//             backgroundColor: '#111111',
//             height: 50,
//             paddingVertical: 5,
//             borderColor: '#111111',
//           },
//           // tabBarLabelStyle: {
//           //   fontSize: 12,
//           //   marginBottom: 5,
//           // },
//           tabBarIcon: ({focused, size, color}) => {
//             let iconName;
//             if (route.name === 'Facebook') {
//               iconName = focused ? 'home-sharp' : 'home-outline';
//             } else if (route.name === 'Video') {
//               iconName = focused ? 'tv-sharp' : 'tv-outline';
//             } else if (route.name === 'Friends') {
//               iconName = focused ? 'people-sharp' : 'people-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused
//                 ? 'person-circle-sharp'
//                 : 'person-circle-outline';
//             } else if (route.name === 'Notification') {
//               iconName = focused
//                 ? 'notifications-sharp'
//                 : 'notifications-outline';
//             } else if (route.name === 'login') {
//               iconName = focused ? 'menu-sharp' : 'menu-outline';
//             }
//             const iconColor = focused ? '#216BFF' : 'gray';
//             return <Ionic name={iconName} size={25} color={iconColor} />;
//           },
//           tabBarLabel: ({focused, style}) => (
//             <Text
//               style={[
//                 style,
//                 {
//                   color: focused ? '#216BFF' : 'gray',
//                   fontSize: focused ? 11 : 11,
//                   marginBottom: focused ? 5 : 5,
//                 },
//               ]}>
//               {getTabBarLabel(route)}
//             </Text>
//           ),
//         })}>
//         <Tab.Screen name="Facebook" component={Facebook} />
//         <Tab.Screen name="Video" component={Video} />
//         <Tab.Screen name="Friends" component={Friends} />
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Notification" component={Notification} />
//         <Tab.Screen name="login" component={Login} />
//       </Tab.Navigator>
//     );
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="login"
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Bottom" component={BottomTabScreen} />
//         <Stack.Screen name="Status" component={Status} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootComponent;
