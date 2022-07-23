import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconMenu from '../items/IconMenu/IconMenu';
import {colors} from '../../utils/colors';

const Sponsor = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.text, fontSize: 14, textAlign: 'center'}}>
        Bekerja sama dengan :
      </Text>
      <View style={styles.sponsor}>
        <IconMenu
          type="FontAwesome"
          name="facebook"
          size={25}
          color={colors.biru}
        />
        <IconMenu
          type="AntDesign"
          name="github"
          size={25}
          color={colors.text}
        />
        <IconMenu type="FontAwesome" name="whatsapp" size={25} color="green" />
      </View>
    </View>
  );
};

export default Sponsor;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingBottom: 50,
    bottom: -50,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
    height: 250,
    zIndex: -1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  sponsor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
