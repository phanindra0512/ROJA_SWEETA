import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./RJRadioButton.styles.ts";
import COLOR from "../../assets/utils/Color.ts";

const RJRadioButton = (props) => {
  // const [selected, setIsSelected] = useState(false);

  // const selectOption = () => {
  //   setIsSelected(!selected);
  // };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={props.selectOption} style={styles.outerCircle}>
        {props.selected ? <View style={styles.innerCircle} /> : null}
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          {
            fontWeight: props.selected ? "400" : null,
            color: props.selected ? COLOR.black : null,
          },
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default RJRadioButton;
