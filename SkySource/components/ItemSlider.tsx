import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("screen");

const ItemSlider = (props: any) => {
  const { item } = props;
  const styles = StyleSheet.create({
    slide: {
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      width: width,
    },
    image: {
      width: "80%",
      height: 250,
      borderRadius: 20,
    },
  });

  return (
    <View style={styles.slide}>
      <Image source={item.image} alt={item.title} style={styles.image} />
    </View>
  );
};

export default ItemSlider;
