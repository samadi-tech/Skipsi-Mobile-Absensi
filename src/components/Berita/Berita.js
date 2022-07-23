import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {colors, PRIMARY, TEXT, WHITE} from '../../utils/colors';

const Berita = () => {
  return (
    <View style={styles.container}>
      <View style={styles.akun}>
        <View style={styles.profil}></View>
        <Text style={styles.nama}>ADI NUGROHO</Text>
      </View>
      <View style={styles.berita}></View>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', paddingVertical: 3},
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
