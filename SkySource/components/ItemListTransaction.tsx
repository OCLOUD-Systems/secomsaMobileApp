import { Image, StyleSheet, Text, View } from "react-native";
import Status from "./Status";

const ItemListTransaction = () => {
  const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        status: {
          width: 66,
          height: 58,
        },
      });
  return (
    <View style={styles.container}>
      <Image 
        style={styles.tinyLogo}
        source={require("")}
      />
      <View>
        <Text style={styles.status}>{props.reportId}</Text>
        <Text style={styles.status}>{props.title}</Text>
      </View>
      <Status status={props.status} />
    </View>

  );
};

export default ItemListTransaction;
