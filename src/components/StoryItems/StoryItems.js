import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Story from '../items/Story/Story';

const StoryItems = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </ScrollView>
  );
};

export default StoryItems;

const styles = StyleSheet.create({
  container: {backgroundColor: 'transparent'},
});
