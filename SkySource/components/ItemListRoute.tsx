import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const ItemListRoute = (props: any) => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

   const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        map: {
          width: 66,
          height: 58,
        },
        title: {
          width: 66,
          height: 58,
        },
      });
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
                style={styles.map}
                source={require(props.image)}
              />
    </View>

  );
};

export default ItemListRoute;
