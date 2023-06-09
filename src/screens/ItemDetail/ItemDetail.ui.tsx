import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import COLOR from "../../assets/utils/Color";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./ItemDetail.styles.ts";
import { RJButton } from "../../components";

const ItemDetail = ({ navigation, route }) => {
  const { data } = route.params;

  const navigateBack = () => {
    navigation.goBack();
  };

  const onPressEvent = () => {
    console.log("Button clicked");
    // Item added to cart and go back for now!!!
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={data.productImage}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.8 }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={navigateBack} style={styles.iconContainer}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={COLOR.black}
              style={{ paddingTop: 4 }}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons
              name="ios-share-social"
              size={20}
              color={COLOR.black}
              style={{ paddingTop: 4 }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={{ flex: 1.5, padding: 10 }}>
        <Text style={styles.title}>{data.productName}</Text>
        <Text style={{ fontFamily: "Ubuntu-Medium", paddingVertical: 5 }}>
          MRP :
          <Text style={styles.price}>
            {" "}
            {"\u20B9"} {data.productPrice}
          </Text>
        </Text>
        <Text style={styles.description}>
          {/* {data.productDescription} */}
          In packet contains 12 pieces that contains 100g In packet contains 12
          pieces that contains 100g In packet contains 12 pieces that contains
          100g In packet contains 12 pieces that contains 100g
        </Text>
        <View style={styles.contentContainer}>
          <View style={styles.sizeContainer}>
            <Text style={styles.subtitle}>Size</Text>
            <Text style={styles.subContent}>{data.size}</Text>
          </View>

          <View style={styles.quantityContainer}>
            <Text style={styles.subtitle}>Quantity</Text>
            <Text style={styles.subContent}>{data.quantity}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          position: "absolute",
          bottom: 5,
          alignSelf: "center",
        }}
      >
        {/* <RJButton
          title={"Add to cart"}
          onPressEvent={onPressEvent}
          disabled={false}
        /> */}
      </View>
    </View>
  );
};

export default ItemDetail;
