import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';

class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()}>
        <View style={styles.button}>
          <Icon name={'caret-forward-outline'} size={30} color={Colors.white} />
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: Colors.primary,
  },
});

export default PlayButton;
