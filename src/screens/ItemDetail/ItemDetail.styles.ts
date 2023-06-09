import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  headerContainer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLOR.gray,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
  },
  price: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
  },
  subtitle: {
    fontSize: 11,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.darkGray,
  },
  subContent: {
    fontSize: 14,
    fontFamily: "Ubuntu-Medium",
    paddingVertical: 3,
    color: COLOR.black,
  },
  contentContainer: {
    width: 220,
    flexDirection: "row",
    paddingTop: 10,
  },
  sizeContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: COLOR.subheadingLight,
    paddingRight: 15,
  },
  quantityContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  description: {
    fontSize: 13,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.darkGray,
  },
});
export default styles;
