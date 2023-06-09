import { StyleSheet, Dimensions } from "react-native";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundContainer: {
    backgroundColor: COLOR.buttonSolid,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerBlock: {
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 20,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 26,
    fontFamily: "Ubuntu-Bold",
    color: COLOR.white,
  },
  subHeading: {
    fontSize: 14,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.headings,
  },
  ordersBlock: {
    // height: 120,
    backgroundColor: COLOR.white,
    width: ScreenWidth - 40,
    // position: "absolute",
    // bottom: -60,
    elevation: 5,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: 20,
  },
  orderCountBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRightColor: "#ccc",
    borderWidth: 0,
    borderRightWidth: 1.5,
    borderRightRadius: 5,
    borderStyle: "dashed",
  },
  divider: {
    borderRightColor: "#ccc",
    borderWidth: 0,
    borderRightWidth: 0.7,
    borderRightRadius: 1,
    borderStyle: "dashed",
    alignSelf: "flex-end",
  },
  servicesHeading: {
    color: COLOR.headings,
    fontSize: 18,
    fontFamily: "Ubuntu-Bold",
    paddingVertical: 15,
  },
  cardContainer: {
    width: 65,
    height: 60,
    backgroundColor: "transparent",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  servicesContainer: {
    // marginTop: 60,
    paddingHorizontal: 15,
  },
  servicesBlock: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  servicesTitle: {
    fontSize: 14,
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    paddingTop: 8,
    color: COLOR.headings,
  },
  coroselContainer: {
    backgroundColor: COLOR.white,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionCard: {
    // backgroundColor: COLOR.whiteDull,
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
  card: {
    width: 250,
    height: 150,
    backgroundColor: COLOR.whiteDull,
    borderRadius: 10,
    elevation: 5,
    marginRight: 15,
    marginBottom: 15,
    marginLeft: 5,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "Ubuntu-Medium",
    color: COLOR.black,
  },
  cardContent: {
    fontSize: 12,
    fontFamily: "Ubuntu-Regular",
    color: COLOR.black,
  },
});
export default styles;
