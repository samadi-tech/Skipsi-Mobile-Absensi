import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Berita,
  MenuBottom,
  MenuTop,
  StoryItems,
} from '../../components/Components';
import {setPosting} from '../../redux/action';
import {colors} from '../../utils/colors';

const Home = ({navigation}) => {
  const home = useSelector(state => state.homeReduser.posting);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:8000/api/posting')
      .then(function (response) {
        dispatch(setPosting(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);

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
          {home.map((post, index) => {
            return (
              <Berita
                key={post.id}
                posting={post.posting}
                nama={post.penulis}
              />
            );
          })}
        </View>
      </ScrollView>
      <MenuBottom navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F1F1F1', paddingBottom: 70},
  header: {
    color: colors.putih,
    fontSize: 17,
    textAlign: 'left',
  },
});
