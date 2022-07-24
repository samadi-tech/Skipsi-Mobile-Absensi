import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MenuTop} from '../../components/Components';
import {colors} from '../../utils/colors';

const Tentang = ({navigation}) => {
  function onPress() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <MenuTop
        title="Tentang"
        type="FontAwesome"
        name="chevron-left"
        size={25}
        color={colors.putih}
        onPress={() => {
          onPress();
        }}
      />
      <View
        style={{
          backgroundColor: colors.biru,
          height: 150,
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.header}>Absen Online Insan Pembangunan</Text>
      </View>
      <ScrollView
        style={{flex: 1, padding: 15}}
        showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.text}>
            {'\t'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            possimus sed ullam hic soluta, repellat assumenda non repudiandae
            doloremque voluptas ab quae tenetur labore eius eaque natus
            exercitationem sapiente eligendi.
          </Text>
          <Text style={styles.text}>
            {'\t'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            possimus sed ullam hic soluta, repellat assumenda non repudiandae
            doloremque voluptas ab quae tenetur labore eius eaque natus
            exercitationem sapiente eligendi.
          </Text>
          <Text style={styles.text}>
            {'\t'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            possimus sed ullam hic soluta, repellat assumenda non repudiandae
            doloremque voluptas ab quae tenetur labore eius eaque natus
            exercitationem sapiente eligendi.
          </Text>
          <Text style={styles.text}>
            {'\t'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            possimus sed ullam hic soluta, repellat assumenda non repudiandae
            doloremque voluptas ab quae tenetur labore eius eaque natus
            exercitationem sapiente eligendi.
          </Text>
          <Text style={styles.text}>
            {'\t'}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            possimus sed ullam hic soluta, repellat assumenda non repudiandae
            doloremque voluptas ab quae tenetur labore eius eaque natus
            exercitationem sapiente eligendi.
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{color: colors.text}}>
            <Text style={{color: colors.text}}>AOL 1.0.0</Text>
          </Text>
          <Text style={{color: colors.text}}>
            Terimakasih kepada: Insan Pembangunan
          </Text>
          <Text style={{color: colors.text, fontWeight: 'bold'}}>
            Created By: ADI NUGROHO
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1F1F1'},
  header: {
    color: colors.putih,
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  text: {color: colors.biru, fontSize: 14, textAlign: 'justify', marginTop: 5},
});
