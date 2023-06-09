import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  contentBlock: {
    height: ScreenHeight - 100,
    backgroundColor: COLOR.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  Heading: {
    fontSize: 25,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.white,
  },
  subHeading: {
    fontSize: 13,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.whiteDull,
  },
  button: {
    borderRadius: 7,
    backgroundColor: COLOR.buttonSolid,
    alignSelf: "center",
    marginBottom: 15,
  },
  editPicContainer: {
    position: "absolute",
    top: 50,
    right: -5,
    backgroundColor: COLOR.buttonSolid,
    borderRadius: 50,
    padding: 5,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  modalContent: {
    height: 100,
    marginHorizontal: 15,
    borderRadius: 7,
    backgroundColor: COLOR.white,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  profileCreated: {
    fontSize: 20,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.black,
  },
  imageModalContent: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: COLOR.white,
    marginHorizontal: 5,
    paddingTop: 20,
    padding: 10,
  },
  uploadTitle: {
    fontSize: 20,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.buttonSolid,
    paddingBottom: 3,
  },
  uploadSubtitle: {
    fontSize: 13,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
  },
  imageSelectionBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 15,
  },
  selectionIcon: { alignItems: "center", justifyContent: "center" },
  imageModalContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
});
export default styles;
