import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const AddButton = (props: any) => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

  const styles = StyleSheet.create({
    button: {
      padding: 10,
      backgroundColor: Colors[colorScheme ?? "light"].background,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <AntDesign size={28} name="plus" color={color} />
      <Text style={{ fontSize: 16, color: color }}>{props.Text}</Text>
    </Pressable>
  );
};

export default AddButton;
