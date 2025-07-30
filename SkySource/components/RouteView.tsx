import { Image, StyleSheet, View } from 'react-native';

const RouteView = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: 50,
      height: 50,
    },
    
  });
  return ( 
    <View style={styles.container}>
      <Image
        style={styles.map}
        source={require(props.image)}
      />
    </View>
  
  );  
};

export default RouteView;
