import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageBackground: {
    width: windowWidth,
    height: 130,
    marginBottom: 3,
  },
  titleBlock: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    color: COLOR.white,
    fontFamily: "Ubuntu-Bold",
    textShadowColor: "rgba(0, 0, 1, 0.75)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .2)",
    paddingVertical: 5,
    paddingHorizontal: 20,
    // textAlign: "right",
  },
});
export default styles;
