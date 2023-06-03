import 'react-native-gesture-handler';
import React from 'react';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Navbar from './components/Navbar';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
