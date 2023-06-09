import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  monthBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  monthTitle: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.headings,
  },
  circularBlock: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  circle: {
    borderWidth: 6,
    borderColor: COLOR.buttonSolid,
    backgroundColor: COLOR.whiteDull,
    borderRadius: 100,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  circularArrow: { width: 40, height: 40, marginHorizontal: 10 },
  titleContainer: {
    backgroundColor: COLOR.whiteDull,
    padding: 13,
    marginTop: 15,
  },
  transactionCard: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.subheadingLight,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLOR.whiteDull,
    alignItems: "center",
    justifyContent: "center",
  },
  orderContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  orderId: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
    paddingBottom: 5,
  },
  orderDate: {
    fontSize: 11,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.dullBlack,
  },
  amountContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  amount: {
    fontSize: 15,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
  },
});
export default styles;
