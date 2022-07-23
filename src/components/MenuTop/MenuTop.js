import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import IconMenu from '../items/IconMenu/IconMenu';

const MenuTop = ({title, ...data}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.biru} />
      <IconMenu {...data} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon}>
        <IconMenu type="Entypo" name="user" size={25} color={colors.putih} />
      </View>
    </View>
  );
};

export default MenuTop;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 100,
    height: 55,
    width: '100%',
    backgroundColor: colors.biru,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 18,
    color: colors.putih,
  },
  textHeader: {
    marginTop: 15,
    paddingLeft: 60,
    paddingRight: 20,
    fontSize: 12,
    color: '#ffffff',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
