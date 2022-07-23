import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const IconMenu = ({type, ...data}) => {
  return (
    <View style={styles.icons}>
      {type == 'AntDesign' ? <AntDesign {...data} /> : null}
      {type == 'Entypo' ? <Entypo {...data} /> : null}
      {type == 'Ionicons' ? <Ionicons {...data} /> : null}
      {type == 'FontAwesome' ? <FontAwesome {...data} /> : null}
    </View>
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
