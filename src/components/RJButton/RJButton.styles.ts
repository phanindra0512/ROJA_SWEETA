import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: windowWidth - 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: COLOR.white,
    fontFamily: "Ubuntu-Medium",
  },
});
export default styles;
