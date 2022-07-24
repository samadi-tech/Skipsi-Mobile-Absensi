import axios from 'axios';
import React, {useEffect} from 'react';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ListHistory, MenuTop} from '../../components/Components';
import {setHistory} from '../../redux/action';
import {colors} from '../../utils/colors';

const History = ({navigation}) => {
  const history = useSelector(state => state.absensiReduser.history);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8000/api/absensi/')
      .then(function (response) {
        dispatch(setHistory(response.data.data));
      })
      .catch(function (error) {
        Alert.alert('Error', 'Data gagal di ambil');
      });
  }, [dispatch]);

  function onPress() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <MenuTop
        title="History"
        type="FontAwesome"
        name="chevron-left"
        size={25}
        color={colors.putih}
        onPress={() => {
          onPress();
        }}
      />
      <ScrollView
        style={{flex: 1, padding: 5}}
        showsVerticalScrollIndicator={false}>
        {history.map(absen => {
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
