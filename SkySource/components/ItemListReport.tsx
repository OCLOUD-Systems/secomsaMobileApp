import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Status from "./Status";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const ItemListReport = (props: any) => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

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
      <MaterialIcons size={28} name="house" color={color} />
      <View>
        <Text style={styles.status}>{props.reportId}</Text>
        <Text style={styles.status}>{props.title}</Text>
      </View>
      <Status status={props.status} />
    </View>

  );
};

export default ItemListReport;
