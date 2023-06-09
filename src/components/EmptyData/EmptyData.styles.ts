import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 16,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.darkGray,
    paddingTop: 10,
  },
});

export default styles;
