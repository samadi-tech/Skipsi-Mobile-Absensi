import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MenuTop} from '../../components/Components';
import {colors} from '../../utils/colors';

const Posting = () => {
  return (
    <View style={styles.container}>
      <MenuTop title="Tentang" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.biru,
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: colors.putih,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Judul Postingan Anda akan di Taruh disini dan akan di terbitkan di
            halaman Postingan
          </Text>
        </View>
        <View
          style={{backgroundColor: colors.putih, marginTop: 10, padding: 10}}>
          <Text
            style={{
              fontSize: 12,
              color: colors.text,
              marginTop: 10,
              textAlign: 'justify',
            }}>
            {'\t'}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ullam eligendi ducimus atque iusto vero consequuntur, vitae nesciunt
            animi quam quaerat veniam earum! Itaque aliquam aperiam id, ex
            maxime vel veritatis quaerat quam maiores aut obcaecati voluptas sit
            ad voluptatem illo sequi adipisci neque asperiores quod unde dolore
            ut quas eius!
          </Text>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 12,
                color: colors.text,
                textAlign: 'justify',
                fontWeight: 'bold',
              }}>
              Diposting Oleh : ADI NUGROHO
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: colors.text,
                textAlign: 'justify',
              }}>
              2020/08/13 18:10
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Posting;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.putih},
});
