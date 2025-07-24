import React from "react";
import { StyleSheet, TextInput } from 'react-native';

const InputMoney = (props: any) => {
   const styles = StyleSheet.create({
    input: {
      height: 30,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  return(
      <TextInput
            style={styles.input}
            onChangeText={props.onChange}
            value={props.text}
            placeholder="0.00"
            keyboardType="decimal-pad"
          />
    );
};

export default InputMoney;
