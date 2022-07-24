import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import {ProfilSosmed} from '../Components';
import InputData from '../items/InputData/InputData';

const FormLogin = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Username :</Text>
          <InputData placeholder="Username" />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Password :</Text>
          <InputData placeholder="Password" secureTextEntry={true} />
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.absen}>
              <Text style={styles.absenText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ProfilSosmed />
    </>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
});
