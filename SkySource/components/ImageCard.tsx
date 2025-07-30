import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const ImageCard = (props: any) => {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

  return ( 
    <View style={styles.container}>
            <Image
              style={styles.card}
              source={require(props.image)}
            />
          </View>
  );
};

export default ImageCard;
