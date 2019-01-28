/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen'


import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import TentangHadits from './src/screens/TentangHadits';
import LatihanScreen from './src/screens/LatihanScreen';
import DaftarIsiScreen from './src/screens/DaftarIsiScreen';
import isiHadits from './src/screens/isiHadits';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Daftar: DaftarIsiScreen,
    Isi: isiHadits,
    Tentang: TentangHadits,
    About: AboutScreen,
    Latihan: LatihanScreen,
  },
  {
    initialRouteName: "Home",
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
    
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  tombol: {
    backgroundColor: '#efebe8',
    alignSelf: 'center',
  }
});
