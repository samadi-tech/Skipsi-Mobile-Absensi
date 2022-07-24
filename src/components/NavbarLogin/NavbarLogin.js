import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconMenu from '../items/IconMenu/IconMenu';
import {colors} from '../../utils/colors';

const NavbarLogin = () => {
  return (
    <View style={styles.container}>
      <IconMenu
        type="Entypo"
        name="new-message"
        size={20}
        color={colors.putih}
      />
      <IconMenu
        type="Ionicons"
        name="settings-outline"
        size={20}
        color={colors.putih}
      />
    </View>
  );
};

export default NavbarLogin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.biru,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
