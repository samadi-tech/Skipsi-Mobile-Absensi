import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setForm} from '../../redux/action';
import {colors} from '../../utils/colors';
import InputData from '../items/InputData/InputData';

const FormInput = () => {
  const redux = useSelector(state => state.absensiReduser);
  const dispatch = useDispatch();

  async function onPress() {
    await axios
      .post('http://10.0.2.2:8000/api/absensi/', redux.form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onChange = (type, value) => {
    dispatch(setForm(type, value));
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>NPM :</Text>
        <InputData
          placeholder="NPM"
          value={redux.form.npm}
          onChangeText={value => onChange('npm', value)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nama :</Text>
        <InputData
          placeholder="Nama"
          value={redux.form.nama}
          onChangeText={value => onChange('nama', value)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Kelas :</Text>
        <View
          style={{
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.biru,
          }}>
          <Picker
            selectedValue={redux.form.kelas}
            onValueChange={(value, itemIndex) => onChange('kelas', value)}>
            <Picker.Item style={styles.picker} label="Pilih Kelas" value="" />
            <Picker.Item
              style={styles.picker}
              label="SI 4B Malam"
              value="SI 4B Malam"
            />
            <Picker.Item
              style={styles.picker}
              label="SI 4C Malam"
              value="SI 4C Malam"
            />
          </Picker>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Matakuliah :</Text>
        <View
          style={{
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.biru,
          }}>
          <Picker
            selectedValue={redux.form.matakuliah}
            onValueChange={(value, itemIndex) => onChange('matakuliah', value)}>
            <Picker.Item
              style={styles.picker}
              label="Pilih Matakuliah"
              value=""
            />
            <Picker.Item
              style={styles.picker}
              label="Matematika"
              value="Matematika"
            />
            <Picker.Item
              style={styles.picker}
              label="Pemprograman"
              value="Pemprograman"
            />
          </Picker>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Keterangan :</Text>
        <View
          style={{
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.biru,
          }}>
          <Picker
            selectedValue={redux.form.keterangan}
            onValueChange={(value, itemIndex) => onChange('keterangan', value)}>
            <Picker.Item
              style={styles.picker}
              label="Pilih Keterangan"
              value=""
            />
            <Picker.Item style={styles.picker} label="Hadir" value="Hadir" />
            <Picker.Item
              style={styles.picker}
              label="Tidak Hadir"
              value="Tidak Hadir"
            />
          </Picker>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}>
          <View style={styles.absen}>
            <Text style={styles.absenText}>ABSENSI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: -100,
    paddingVertical: 20,
    borderColor: colors.background,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.putih,
    padding: 5,
  },
  form: {
    marginVertical: 5,
  },
  label: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 10,
  },
  absen: {
    backgroundColor: colors.biru,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 40,
  },
  absenText: {
    color: colors.putih,
    fontWeight: 'bold',
  },
  picker: {fontSize: 12, color: colors.text},
});
