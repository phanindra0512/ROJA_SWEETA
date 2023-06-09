import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color.ts";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  profileContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: COLOR.whiteDull,
    elevation: 10,
    height: "auto",
  },
  imageBlock: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  name: {
    fontSize: 23,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
    paddingRight: 15,
  },
  mobile: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
  },
  chipContainer: {
    backgroundColor: COLOR.green,
    width: 90,
    height: 28,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  chipText: {
    fontSize: 12,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.white,
  },
  buttonBlock: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
    paddingLeft: 15,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: COLOR.subheadingLight,
  },
});
export default styles;
