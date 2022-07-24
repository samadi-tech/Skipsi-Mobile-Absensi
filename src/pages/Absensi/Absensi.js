import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FormAbsensi, MenuTop, Sponsor} from '../../components/Components';
import IconMenu from '../../components/items/IconMenu/IconMenu';
import {colors} from '../../utils/colors';

const Absensi = ({navigation}) => {
  function onPress() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <MenuTop
        title="Absensi"
        type="FontAwesome"
        name="chevron-left"
        size={25}
        color={colors.putih}
        onPress={() => {
          onPress();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: colors.biru, height: 200, padding: 10}}>
          <Text style={styles.header}>
            Mahasiswa Yang baik selalu mengisi absensi
          </Text>
        </View>
        <FormAbsensi />
        <Sponsor />
      </ScrollView>
      <View
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          bottom: 20,
          right: 20,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: colors.putih,
          borderColor: colors.biru,
        }}>
        <IconMenu
          type="FontAwesome"
          name="barcode"
          size={30}
          color={colors.text}
        />
      </View>
    </View>
  );
};

export default Absensi;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1F1F1'},
  header: {
    color: colors.putih,
    fontSize: 16,
    marginTop: 30,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
