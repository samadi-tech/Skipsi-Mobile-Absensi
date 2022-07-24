import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconMenu = ({type, onPress, ...data}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.icons}>
        {type == 'AntDesign' ? <AntDesign {...data} /> : null}
        {type == 'Entypo' ? <Entypo {...data} /> : null}
        {type == 'Ionicons' ? <Ionicons {...data} /> : null}
        {type == 'FontAwesome' ? <FontAwesome {...data} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    margin: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
