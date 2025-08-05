import Slider from "@/components/Slider";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { Button, Linking, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme ?? "light"].tint;

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
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors[colorScheme ?? "light"].primary,
    },
  });

  const handlePress = () => {
    Linking.openURL('https://www.secomsagroup.com/');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}></View> 
      <View style={styles.container}>
        <View className="">
          <Slider className=""></Slider>
        </View>
        <View className="">
          <Slider className=""></Slider>
        </View>
        <Text className="">Visita nuestro sitio web oficial para mas información</Text>
        <Button title="Ir al sitio" onPress={handlePress}/>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
