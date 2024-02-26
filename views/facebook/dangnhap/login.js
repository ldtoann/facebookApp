import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const handleLoginPress = () => {
    navigation.navigate('Facebook');
    // Alert.alert('Đăng nhập thành công');
  };
  return (
    <View>
      <ImageBackground
        style={styles.bg_login}
        source={require('../../../src/public/post4.png')}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.section_login}>
            <View style={styles.from_login}>
              <View style={styles.section_logo}>
                <Text style={styles.section_logo_logo}>facebook</Text>
              </View>
              <View style={styles.section_input}>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email hoặc số điện thoại"
                  />
                </View>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Mật khẩu Facebook"
                    autoCapitalize="none"
                    secureTextEntry={getPasswordVisible ? false : true} // Đảm bảo mật khẩu được ẩn
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setPasswordVisible(!getPasswordVisible);
                    }}>
                    {getPasswordVisible ? (
                      <FontAwesome
                        style={styles.icon_eye}
                        icon={SolidIcons.eye}
                      />
                    ) : (
                      <FontAwesome
                        style={styles.icon_eye}
                        icon={SolidIcons.eyeSlash}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.section_button}>
                <TouchableOpacity
                  style={styles.section_button_login}
                  // onPress={() => {
                  //   navigation.navigate('Facebook');
                  // }}
                  onPress={handleLoginPress}>
                  <Text style={styles.section_button_login_text}>
                    ĐĂNG NHẬP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section_more}>
              <Text style={styles.section_more_register}>Đăng ký Facebook</Text>
              <Text style={styles.section_more_register}>Cần trợ giúp?</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Login;
