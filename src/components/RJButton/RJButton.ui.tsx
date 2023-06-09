import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./RJButton.styles";
import COLOR from "../../assets/utils/Color";

const RJButton = (props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style,
        { backgroundColor: props.disabled ? "#C8C8C8" : COLOR.buttonSolid },
      ]}
      onPress={props.onPressEvent}
      disabled={props.disabled}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RJButton;
