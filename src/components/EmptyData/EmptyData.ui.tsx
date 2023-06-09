import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./EmptyData.styles.ts";
import COLOR from "../../assets/utils/Color";

const EmptyData = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={props.imageStyle} />
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
};

export default EmptyData;
