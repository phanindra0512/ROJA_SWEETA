import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import COLOR from "../../assets/utils/Color";
import styles from "./LoadingIndicator.styles.ts";

const LoadingIndicator = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ActivityIndicator size="small" color={COLOR.whiteDull} />
      </View>
    </View>
  );
};

export default LoadingIndicator;
