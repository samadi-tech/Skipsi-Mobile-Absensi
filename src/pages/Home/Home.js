import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {
  Berita,
  MenuBottom,
  MenuTop,
  StoryItems,
} from '../../components/Components';
import {colors} from '../../utils/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <MenuTop
        title="Insan Pembangunan"
        type="Ionicons"
        name="menu"
        size={25}
        color={colors.putih}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.biru,
            height: 50,
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.header}>Hai,</Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              color: colors.putih,
              textDecorationLine: 'underline',
              fontWeight: '700',
            }}>
            Insan Pembangunan
          </Text>
        </View>
        <View
          style={{
            position: 'relative',
            top: 0,
            left: 0,
          }}>
          <StoryItems />
          <Berita />
          <Berita />
          <Berita />
          <Berita />
          <Berita />
          <Berita />
        </View>
      </ScrollView>
      <MenuBottom />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1F1F1'},
  header: {
    color: colors.putih,
    fontSize: 17,
    textAlign: 'left',
  },
});
