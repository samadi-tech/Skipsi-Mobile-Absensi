import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  FormLogin,
  FormRegister,
  HeaderProfil,
  MenuBottom,
  NavbarLogin,
} from '../../components/Components';
import {colors} from '../../utils/colors';

const Profil = ({navigation}) => {
  const redux = useSelector(state => state.profilReduser);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.biru} />
      <NavbarLogin data={true} register={false} />
      <HeaderProfil />
      {redux.isLogin ? <FormLogin /> : <FormRegister />}
      <MenuBottom navigation={navigation} />
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({});
