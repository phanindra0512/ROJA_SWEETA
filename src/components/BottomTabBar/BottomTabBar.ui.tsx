import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLOR from "../../assets/utils/Color.ts";

const BottomTabBar = (props) => {
  const { children, onPress, accessibilityState } = props;

  if (accessibilityState.selected) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopWidth: 3,
          borderTopColor: COLOR.buttonSolid,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingVertical: 5,
        }}
      >
        {children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, paddingVertical: 5 }}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

export default BottomTabBar;
