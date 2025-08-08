import Slider from "@/components/Slider";
import { Colors } from "@/constants/Colors";
import { busImages } from "@/data/dashboard-data";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import {
  Button,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Dashboard = () => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: Colors[colorScheme ?? "light"].secondary,
    },
    header: {
      height: "10%",
      width: "100%",
    },
    container: {
      padding: 10,
      height: "90%",
      width: "100%",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: Colors[colorScheme ?? "light"].primary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  });

  const handlePress = () => {
    Linking.openURL("https://www.secomsagroup.com/");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}></View>
      <View style={styles.container}>
        <View className="">
          <Slider className="" images={busImages} />
        </View>
        <View className="">
          <Slider className="" images={busImages} />
        </View>
        <Text className="">
          Visita nuestro sitio web oficial para mas información
        </Text>
        <Button title="Ir al sitio" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
