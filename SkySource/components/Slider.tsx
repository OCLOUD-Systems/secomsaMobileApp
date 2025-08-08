import React from "react";
import { FlatList, View } from "react-native";
import ItemSlider from "./ItemSlider";

const Slider = (props: any) => {
  return (
    <View>
      <FlatList
        data={props.images}
        renderItem={({ item }) => <ItemSlider item={item} key={item.id} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default Slider;
