import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';
import IconMenu from '../items/IconMenu/IconMenu';

const MenuBottom = ({navigation}) => {
  function onPress(nama) {
    navigation.navigate(nama);
  }
  return (
    <View style={styles.container}>
      <IconMenu
        onPress={() => {
          onPress('homePage');
        }}
        type="Entypo"
        name="home"
        size={25}
        color={colors.text}
      />
      <IconMenu
        onPress={() => {
          onPress('absensi');
        }}
        type="Ionicons"
        name="school"
        size={25}
        color={colors.text}
      />
      <IconMenu
        type="FontAwesome"
        name="history"
        size={25}
        color={colors.text}
        onPress={() => {
          onPress('history');
        }}
      />
      <IconMenu
        onPress={() => {
          onPress('tentang');
        }}
        type="Entypo"
        name="info"
        size={25}
        color={colors.text}
      />
      <IconMenu
        onPress={() => {
          onPress('profil');
        }}
        type="FontAwesome"
        name="user"
        size={25}
        color={colors.text}
      />
    </View>
  );
};

export default MenuBottom;

const styles = StyleSheet.create({
  container: {
    height: 65,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: colors.putih,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
