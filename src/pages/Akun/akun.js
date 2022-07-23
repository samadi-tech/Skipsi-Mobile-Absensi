import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRIMARY, SECONDARY, TEXT, WHITE} from '../../utils/colors';
import Icons from 'react-native-vector-icons/FontAwesome';

const Akun = () => {
  return (
    <ScrollView style={{backgroundColor: '#B2C8DF'}}>
      <View style={styles.header}>
        <View style={styles.background}>
          <View style={styles.poto}></View>
          <Text style={styles.nama}>ADI NUGROHO</Text>
        </View>
      </View>
      <View style={styles.setting}>
        <View style={styles.menu}>
          <View style={styles.logoMenu}></View>
          <View style={styles.list}>
            <Text>Riwayat Absensi</Text>
          </View>
          <View style={styles.menuTo}></View>
        </View>
        <View style={styles.menu}>
          <View style={styles.logoMenu}></View>
          <View style={styles.list}>
            <Text>Riwayat Absensi</Text>
          </View>
          <View style={styles.menuTo}></View>
        </View>
        <View style={styles.menu}>
          <View style={styles.logoMenu}></View>
          <View style={styles.list}>
            <Text>Riwayat Absensi</Text>
          </View>
          <View style={styles.menuTo}></View>
        </View>
        <View style={styles.menu}>
          <View style={styles.logoMenu}></View>
          <View style={styles.list}>
            <Text>Riwayat Absensi</Text>
          </View>
          <View style={styles.menuTo}></View>
        </View>
        <View style={styles.menu}>
          <View style={styles.logoMenu}></View>
          <View style={styles.list}>
            <Text>Pengaturan Akun</Text>
          </View>
          <View style={styles.menuTo}></View>
        </View>
      </View>
      <View style={styles.setting}>
        <View style={styles.menu}>
          <View style={styles.logoMenu}>
            <Icons name="arrow-left" size={35} color={TEXT} />
          </View>
          <View style={styles.list}>
            <Text style={styles.keluar}>Keluar</Text>
          </View>
          <View style={styles.menuTo}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Akun;

const styles = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  poto: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: SECONDARY,
    marginBottom: 10,
  },
  nama: {
    color: WHITE,
    fontWeight: 'bold',
  },
  setting: {
    position: 'relative',
    marginTop: 15,
    padding: 0,
    margin: 0,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: WHITE,
    elevation: 5,
  },

  logoMenu: {
    width: 50,
    height: 50,
    padding: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginLeft: 3,
    flex: 1,
    textAlign: 'left',
    fontSize: 12,
    color: TEXT,
  },
  keluar: {
    color: 'red',
    fontWeight: 'bold',
  },
});
