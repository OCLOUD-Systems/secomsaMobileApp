import React from "react";
import { Image, StyleSheet } from 'react-native';

const ImageCard = (props: any) => {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

  return ( 
    <Image
        style={styles.tinyLogo}
        source={require(props.image)}
      />
  );
};

export default ImageCard;
