import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from 'react-native-snap-carousel';

const Slider = (props: any) => {
  const carouselRef = useRef(new Carousel(props));
  const styles = StyleSheet.create({
          slide: {
            flex: 1,
          },
          title: {
            width: 66,
            height: 58,
          },
        });

  const renderItem = (item: any, index: number) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
  return (
    <Carousel
      ref={carouselRef}
      data={props.data}
      renderItem={(i) => renderItem(i.item, i.index)}
      sliderWidth={200}
      itemWidth={200}
    />
  );
};

export default Slider;
