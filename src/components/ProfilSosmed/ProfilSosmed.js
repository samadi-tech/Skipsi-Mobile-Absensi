import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconMenu from '../items/IconMenu/IconMenu';
import {colors} from '../../utils/colors';

const ProfilSosmed = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.biru,
          fontSize: 15,
          textAlign: 'center',
          fontStyle: 'italic',
          marginBottom: 15,
        }}>
        Atau :
      </Text>
      <View style={styles.sponsor}>
        <View
          style={{margin: 5, backgroundColor: colors.text, borderRadius: 200}}>
          <IconMenu
            type="FontAwesome"
            name="phone"
            size={25}
            color={colors.putih}
          />
        </View>
        <View
          style={{margin: 5, backgroundColor: colors.biru, borderRadius: 200}}>
          <IconMenu
            type="FontAwesome"
            name="facebook"
            size={25}
            color={colors.putih}
            phone
          />
        </View>
        <View
          style={{margin: 5, backgroundColor: colors.text, borderRadius: 200}}>
          <IconMenu
            type="FontAwesome"
            name="google"
            size={25}
            color={colors.putih}
          />
        </View>
        <View style={{margin: 5, backgroundColor: 'green', borderRadius: 200}}>
          <IconMenu
            type="FontAwesome"
            name="whatsapp"
            size={25}
            color={colors.putih}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfilSosmed;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 50,
    top: 0,
    left: 0,
    width: '100%',
    height: 150,
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
