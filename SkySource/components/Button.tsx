import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const Button = (props: any) => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

  const styles = StyleSheet.create({
    button: {
      padding: 10,
      backgroundColor: Colors[colorScheme ?? "light"].background,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 16,
      color: color,
    },
  });

  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default Button;
