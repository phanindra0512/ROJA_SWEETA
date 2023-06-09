import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color.ts";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Ubuntu-Medium",
    paddingLeft: 15,
    paddingVertical: 15,
    color: COLOR.buttonSolid,
  },
  container: {
    backgroundColor: COLOR.white,
    paddingLeft: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 17,
    fontFamily: "Ubuntu-Medium",
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: "Ubuntu-Regular",
    paddingRight: 10,
    lineHeight: 25,
  },
});
export default styles;
