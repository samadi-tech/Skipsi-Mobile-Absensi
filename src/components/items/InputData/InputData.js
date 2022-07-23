import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../../utils/colors';

const InputData = ({placeholder, ...data}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        {...data}
      />
    </View>
  );
};

export default InputData;

const styles = StyleSheet.create({
  input: {
    borderRadius: 40,
    fontSize: 12,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: colors.biru,
    color: colors.text,
  },
});
