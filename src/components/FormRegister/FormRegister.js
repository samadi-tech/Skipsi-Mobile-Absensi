import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import InputData from '../items/InputData/InputData';

const FormRegister = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.form}>
          <Text style={styles.label}> Nama Lengkap :</Text>
          <InputData placeholder="Nama Lengkap" />
        </View>
        <Text style={styles.label}>Username :</Text>
        <InputData placeholder="Username" />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Password :</Text>
        <InputData placeholder="Password" secureTextEntry={true} />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}> Konfirmasi Password :</Text>
        <InputData placeholder="Password" secureTextEntry={true} />
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.absen}>
            <Text style={styles.absenText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
