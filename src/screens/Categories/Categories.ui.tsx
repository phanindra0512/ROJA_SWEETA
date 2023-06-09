import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import styles from "./Categories.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header } from "../../components";

const categoriesData = [
  {
    id: 1,
    categoryImage: require("../../assets/images/categories/sweets.png"),
    categoryTitle: "SWEETS",
  },
  {
    id: 2,
    categoryImage: require("../../assets/images/categories/Mixture.png"),
    categoryTitle: "Mixture",
  },
  {
    id: 3,
    categoryImage: require("../../assets/images/categories/Biscuits.png"),
    categoryTitle: "Biscuits",
  },
];
const Categories = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header headerTitle="Categories" />
      <ScrollView style={{ marginBottom: 50 }}>
        {categoriesData.map((item) => {
          return (
            <ImageBackground
              key={item.id}
              source={item.categoryImage}
              resizeMode="cover"
              style={styles.imageBackground}
            >
              <View style={styles.titleBlock}>
                <Text style={styles.title}>{item.categoryTitle}</Text>
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
