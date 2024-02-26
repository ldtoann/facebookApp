/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Facebook from './views/facebook/Facebook';
import Login from './views/facebook/dangnhap/login';
import index from './views/facebook/index';

AppRegistry.registerComponent(appName, () => index);
