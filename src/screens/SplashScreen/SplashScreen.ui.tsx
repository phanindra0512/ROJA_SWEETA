import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    displayData();
  }, []);

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem("@ProfileCreated");
      console.log("async value is : " + user);
      setTimeout(() => {
        if (user == null) {
          navigation.replace("MobileNumber");
        } else {
          navigation.replace("Dashboard");
        }
      }, 3000);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
