import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputInfo = (props: any) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  return(
      <View>
        <Text>{props.label}</Text>
        <TextInput
            style={styles.input}
            value={props.text}
            readOnly
          />
      </View>
    );
};

export default InputInfo;
