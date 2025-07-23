import React from "react";
import { StyleSheet, TextInput } from 'react-native';

const InputDescription = (props: any) => {
   const styles = StyleSheet.create({
    input: {
      height: 40,
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
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            editable={props.editable}
            multiline
            numberOfLines={5}
          />
    );
};

export default InputDescription;
