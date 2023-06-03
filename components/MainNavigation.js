import React from 'react';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';
import Navbar from './Navbar';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/Search';

const Stack = createStackNavigator();

class MainNavigation extends React.PureComponent {
  state = {};
  render() {
    return (
      <Stack.Navigator headerMode={'screen'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true}></Navbar>
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation}></Navbar>,
          }}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation}></Navbar>,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainNavigation;
