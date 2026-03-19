import Slider from "@/components/Slider";
import { Colors } from "@/constants/Colors";
import { busImages } from "@/data/dashboard-data";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFocusEffect } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Dashboard = () => {
  const colorScheme = useColorScheme();

  useFocusEffect(
    React.useCallback(() => {
      // This effect runs when the screen is focused
      console.log("Dashboard screen is focused");

      return () => {
        // This cleanup function runs when the screen is unfocused
        console.log("Dashboard screen is unfocused");
      };
    }, [])
  );

  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      backgroundColor: Colors[colorScheme ?? "light"].secondary,
    },
    header: {
      height: "12%",
      width: "100%",
    },
    container: {
      padding: 10,
      height: "90%",
      width: "100%",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      backgroundColor: Colors[colorScheme ?? "light"].primary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    text: {
      color: Colors[colorScheme ?? "light"].text,
      fontSize: 16,
      textAlign: "center",
      marginVertical: 10,
    },
  });

  const handlePress = () => {
    Linking.openURL("https://www.secomsagroup.com/");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Image
          width={300}
          height={50}
          source={require("../../assets/images/KADIZLONG.png")}
        />
      </View>
      <View style={styles.container}>
        <View className="pb-4">
          <Slider className="w-full" images={busImages} />
        </View>
        <View className="">
          <Slider className="" images={busImages} />
        </View>
        <Text style={styles.text}>
          Visita nuestro sitio web oficial para mas información
        </Text>
        <Button title="Ir al sitio" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
