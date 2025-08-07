import { busImages } from "@/data/dashboard-data";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";


const Slider = (props: any) => {
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
    },
    title: {
      width: 66,
      height: 58,
    },
  });

  const ImageItem = (item: any) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          src={item.image}
          alt={item.title}
          style={{ width: "auto", height: "40%" }}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList data={busImages} renderItem={ImageItem} />
    </View>
  );
};

export default Slider;
