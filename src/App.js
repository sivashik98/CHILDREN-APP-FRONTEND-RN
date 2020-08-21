import React from 'react';
import {enableScreens, useScreens} from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
// import {Provider} from 'react-redux';

// import ApiClient from './ApiClient';
// import configureStore from './store/configureStore';
// import TopNavigator from './navigation/TopNavigator';

enableScreens();
// console.disableYellowBox = true;
//
// const api = new ApiClient();
// const store = configureStore({}, api);
import {stackNavigator} from './screens/stackNavigator';

const Navigation = createAppContainer(stackNavigator);

export default () => <Navigation enableURLHandling={false} />;
