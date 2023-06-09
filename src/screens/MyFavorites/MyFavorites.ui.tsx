import { View, Text } from "react-native";
import React from "react";
import styles from "./MyFavorites.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header, RJButton, EmptyData } from "../../components";

const MyFavorites = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Favorites"
        handleBack={navigateBack}
      />

      <EmptyData
        image={require("../../assets/images/favorites.png")}
        imageStyle={{ width: 50, height: 50, tintColor: COLOR.gray }}
        message={"No favorite items found..."}
      />
    </View>
  );
};

export default MyFavorites;
