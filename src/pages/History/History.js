import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ListHistory, MenuBottom, MenuTop} from '../../components/Components';

const History = () => {
  const [Absensi, setAbsensi] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8000/api/absensi/')
      .then(function (response) {
        setAbsensi(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <View style={styles.container}>
      <MenuTop title="History" />
      <ScrollView
        style={{flex: 1, padding: 5}}
        showsVerticalScrollIndicator={false}>
        {Absensi.map(absen => {
          return (
            <ListHistory
              key={absen.id}
              nama={absen.nama}
              npm={absen.npm}
              keterangan={absen.keterangan}
              kelas={absen.kelas}
              matakuliah={absen.matakuliah}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1F1F1'},
});
