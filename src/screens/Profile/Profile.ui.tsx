import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./Profile.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header, RJButton } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profileOptions = [
  {
    id: 1,
    icon: require("../../assets/images/user.png"),
    title: "My Information",
  },
  {
    id: 2,
    icon: require("../../assets/images/shopping_Bag.png"),
    title: "My Orders",
  },
  {
    id: 3,
    icon: require("../../assets/images/shipping_Address.png"),
    title: "Shipping Address",
  },
  {
    id: 4,
    icon: require("../../assets/images/favorites.png"),
    title: "My Favorites",
  },
  {
    id: 5,
    icon: require("../../assets/images/share.png"),
    title: "Share",
  },
  {
    id: 6,
    icon: require("../../assets/images/logout.png"),
    title: "Logout",
  },
];

const Profile = ({ navigation }) => {
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("@ProfileCreated");
      navigation.replace("MobileNumber");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavigation = (title) => {
    console.log(title);
    if (title === "My Information") {
      navigation.navigate("MyInfo", {
        previous_screen: "MyInfo",
      });
    } else if (title === "My Orders") {
      navigation.navigate("ViewOrders");
    } else if (title === "Shipping Address") {
      navigation.navigate("MyAddress");
    } else if (title === "My Favorites") {
      navigation.navigate("MyFavorites");
    } else if (title === "Share") {
      console.log(title);
    } else if (title === "Logout") {
      console.log(title);
      removeUser();
    } else if (title === "Edit Profile") {
      navigation.navigate("MyInfo", {
        previous_screen: "EditProfile",
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header headerTitle="My Profile" />
      <ScrollView>
        <View style={{ marginBottom: 70 }}>
          <View style={styles.profileContainer}>
            <View style={styles.imageBlock}>
              <Image
                source={require("../../assets/images/myPic.jpg")}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.name} numberOfLines={1}>
                  Sai Phanindra
                </Text>
                <Text style={[styles.mobile, { paddingVertical: 5 }]}>
                  +91-9505876290
                </Text>
                <View style={styles.chipContainer}>
                  <Text style={styles.chipText}>Verified</Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonBlock}>
              <RJButton
                title="Edit Profile"
                onPressEvent={() => handleNavigation("Edit Profile")}
              />
            </View>
          </View>

          <View style={{ margin: 15 }}>
            {profileOptions.map((option, key) => {
              return (
                <TouchableOpacity
                  onPress={() => handleNavigation(option.title)}
                  key={key}
                  style={styles.optionContainer}
                >
                  <Image
                    source={option.icon}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text style={styles.optionTitle}>{option.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
