import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils/colors';

const Story = () => {
  return (
    <View style={styles.container}>
      <View style={styles.items}></View>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    borderRadius: 70,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: colors.biru,
  },
  items: {
    width: 65,
    height: 66,
    backgroundColor: colors.putih,
    borderRadius: 70,
  },
});
