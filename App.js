import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './Screens/HomeScreen';
import { ShowRoomScreen } from './Screens/ShowRoomScreen';
import { AboutScreen } from './Screens/AboutScreen';
import { CarDetailsScreen } from './Screens/CarDetailsScreen';
import { CarImagesScreen } from './Screens/CarImagesScreen';

export const AppNav = StackNavigator({
    Home: { screen: HomeScreen },
    ShowRoom: { screen: ShowRoomScreen },
    About: { screen: AboutScreen},
    CarDetails: {screen: CarDetailsScreen},
    carImages: {screen: CarImagesScreen},
});

export default class App extends React.Component {
  render() {
    return (
      <AppNav/>
    );
  }
}

