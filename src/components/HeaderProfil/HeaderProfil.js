import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import IconMenu from '../items/IconMenu/IconMenu';
import {useDispatch} from 'react-redux';
import {setTombol} from '../../redux/action';

const HeaderProfil = ({data, register}) => {
  const dispatch = useDispatch();

  const onChange = (type, value) => {
    dispatch(setTombol(type, value));
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.profil}>
          <IconMenu
            type="AntDesign"
            name="user"
            size={30}
            color={colors.biru}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              onChange('isLogin', true);
            }}>
            <View
              style={{
                marginLeft: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
                backgroundColor: colors.putih,
              }}>
              <Text style={{color: colors.biru, fontSize: 14}}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onChange('isLogin', false);
            }}>
            <View
              style={{
                marginLeft: 10,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderColor: colors.putih,
                borderWidth: 1,
              }}>
              <Text style={{color: 'white', fontSize: 14}}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderProfil;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.biru,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  profil: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
