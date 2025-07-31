import Slider from "@/components/Slider";
import React from "react";
import { Button, Linking, SafeAreaView, Text, View } from "react-native";

const Dashboard = () => {
  const handlePress = () => {
    Linking.openURL('https://www.secomsagroup.com/');
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <View className="">
        <View className=""></View> 
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
