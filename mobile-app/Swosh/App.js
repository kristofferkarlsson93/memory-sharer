import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import configureStore from './app/configureStore';
import appReducer from './app/reducers/index'
import ReduxNavigation from './app/ReduxNavigation';


const mapStateToProps = state => ({ navigation: state.navigation });

const AppWithNavigation = connect(mapStateToProps)(ReduxNavigation);

const store = configureStore(appReducer);


export default () => (
  <Provider store={store}>
    <AppWithNavigation/>
  </Provider>
);


// Bra för API - app med bilder https://www.youtube.com/watch?v=T7NdSiV-DUk
// https://github.com/expo/image-upload-example
// https://www.youtube.com/watch?v=d1nw3QdLv8w
// https://docs.expo.io/versions/latest/sdk/camera.html
// https://docs.expo.io/versions/latest/sdk/imagepicker.html