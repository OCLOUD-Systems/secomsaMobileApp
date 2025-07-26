import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Status = (props: any) => {
  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      status: {
        width: 66,
        height: 58,
      },
    });
  return (
    <View style={styles.container}>
      <Text style={styles.status}>{props.text}</Text>
    </View>
  );
};

export default Status;
