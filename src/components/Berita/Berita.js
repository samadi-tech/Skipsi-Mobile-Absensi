import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';

const Berita = ({nama, posting}) => {
  return (
    <View style={styles.container}>
      <View style={styles.akun}>
        <View style={styles.profil}></View>
        <Text style={styles.nama}>{nama}</Text>
      </View>
      <View style={styles.berita}></View>
      <Text
        style={{
          marginVertical: 5,
          marginTop: 3,
          fontSize: 12,
          color: colors.text,
          fontWeight: '300',
        }}>
        {posting}
      </Text>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', paddingtop: 10, paddingBottom: 20},
  cards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  },
  akun: {
    height: 50,
    backgroundColor: colors.putih,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profil: {
    width: 40,
    height: 40,
    backgroundColor: colors.background,
    marginHorizontal: 15,
    borderRadius: 40,
  },
  nama: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  berita: {height: 350, backgroundColor: colors.background},
});
