import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import config from 'react-native-config';
// import moment from 'moment';
// import 'moment/locale/ru';
import App from './src/App';

import {name as appName} from './app.json';
// moment.locale('ru');

// const App = require('./src/App').default;
AppRegistry.registerComponent(appName, () => App);
