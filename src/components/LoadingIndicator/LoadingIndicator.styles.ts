import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.buttonSolid,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
