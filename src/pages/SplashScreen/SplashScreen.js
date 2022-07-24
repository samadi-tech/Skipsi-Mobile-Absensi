import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets/img/img';
import {SECONDARY, TEXT} from '../../utils/colors';

const SpashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={SECONDARY} />
      <Image source={Logo} style={styles.logo} />
      <Text>Absen Online</Text>
      <Text style={styles.insan}>Insan pembangunaN</Text>
      <View style={styles.copy}>
        <Text style={styles.copyItems}>© 2022. INSAN PEMBANGUNAN.</Text>
      </View>
    </View>
  );
};

export default SpashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  insan: {
    fontSize: 18,
    color: TEXT,
    marginTop: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  copy: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 30,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  copyItems: {
    fontSize: 11,
    color: TEXT,
  },
});
