import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import IconMenu from '../items/IconMenu/IconMenu';

const ListHistory = ({nama, npm, keterangan, matakuliah, kelas}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <IconMenu />
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Mahasiswa dengan nama {nama} npm {npm} {keterangan} matakuliah{' '}
          {matakuliah} kelas {kelas}.
        </Text>
      </View>
    </View>
  );
};

export default ListHistory;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.putih,
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
  },
  icon: {
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  text: {fontSize: 11, color: colors.text},
});
