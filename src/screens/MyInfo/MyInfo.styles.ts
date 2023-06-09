import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color.ts";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  profileBg: { height: 200, backgroundColor: COLOR.buttonSolid },
  imageBg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLOR.white,
    marginTop: 300 / 2,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  inputTitle: {
    fontFamily: "Ubuntu-Medium",
    paddingBottom: 10,
    fontSize: 15,
    color: COLOR.darkGray,
  },
  button: {
    borderRadius: 7,
    backgroundColor: COLOR.buttonSolid,
    alignSelf: "center",
    marginVertical: 10,
  },
  editPicContainer: {
    position: "absolute",
    top: 60,
    right: -5,
    backgroundColor: COLOR.buttonSolid,
    borderRadius: 50,
    padding: 5,
  },
});
export default styles;
