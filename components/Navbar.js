import React from 'react';
import {Image, Text, SafeAreaView, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Colors from '../Themes/Colors';

const propTypes = {
  main: PropTypes.bool,
};

const defaultProps = {
  main: false,
};
class Navbar extends React.PureComponent {
  state = {};
  render() {
    const {navigation, main} = this.props;

    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Image
              style={styles.logo}
              source={require('../assets/images/FullLogo.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icon name="search-outline" size={30} color={Colors.white}></Icon>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name="chevron-back-outline"
                size={40}
                color={Colors.lightGray}></Icon>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
  },
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
