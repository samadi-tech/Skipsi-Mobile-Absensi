import axios from 'axios';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setForm, setRegister} from '../../redux/action';
import {colors} from '../../utils/colors';
import InputData from '../items/InputData/InputData';

const FormRegister = () => {
  const register = useSelector(state => state.profilReduser);
  const dispatch = useDispatch();

  const onChange = (type, value) => {
    dispatch(setForm(type, value));
  };

  useState(() => {
    console.log(register);
  }, []);

  async function onPress() {
    await axios
      .post('http://10.0.2.2:8000/api/register/', register.form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.form}>
          <Text style={styles.label}> Nama Lengkap :</Text>
          <InputData
            placeholder="Nama Lengkap"
            value={register.form.nama}
            onChangeText={value => onChange('nama', value)}
          />
        </View>
        <Text style={styles.label}>Username :</Text>
        <InputData
          placeholder="Username"
          value={register.form.username}
          onChangeText={value => onChange('username', value)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Password :</Text>
        <InputData
          placeholder="Password"
          secureTextEntry={true}
          value={register.form.password}
          onChangeText={value => onChange('password', value)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}> NPM :</Text>
        <InputData
          placeholder="NPM"
          value={register.form.npm}
          onChangeText={value => onChange('npm', value)}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}>
          <View style={styles.absen}>
            <Text style={styles.absenText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FormRegister;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingVertical: 20,
    borderColor: colors.background,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
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
});
