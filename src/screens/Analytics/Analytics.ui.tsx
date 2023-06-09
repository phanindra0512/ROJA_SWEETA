import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./Analytics.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header } from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { myOrders } from "../../constants/MyOrders.constants.ts";

const Analytics = ({ navigation }) => {
  const monthSelectionContainer = () => {
    return (
      <TouchableOpacity style={styles.monthBlock}>
        <Text style={styles.monthTitle}>September,2023</Text>
        <AntDesign
          name="caretdown"
          size={12}
          color={COLOR.black}
          style={{ paddingTop: 4, paddingLeft: 3 }}
        />
      </TouchableOpacity>
    );
  };

  const circularLoaderContainer = () => {
    return (
      <View style={styles.circularBlock}>
        <View style={styles.circle}>
          <Text style={[styles.monthTitle, { fontSize: 35 }]}>100</Text>
          <Text style={styles.monthTitle}>Orders</Text>
        </View>
        <Image
          source={require("../../assets/images/circularArrow.png")}
          style={styles.circularArrow}
        />
        <View style={styles.circle}>
          <Text style={[styles.monthTitle, { fontSize: 25 }]}>5,00,000</Text>
          <Text style={styles.monthTitle}>Worth</Text>
        </View>
      </View>
    );
  };

  const montlyOrders = () => {
    return (
      <View style={{ marginBottom: 100 }}>
        {myOrders?.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderDetails")}
              key={item.id}
              style={styles.transactionCard}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="file-document"
                  size={25}
                  color={COLOR.buttonSolid}
                />
              </View>
              <View style={styles.orderContent}>
                <Text style={styles.orderId}>{item.orderID}</Text>
                <Text style={styles.orderDate}>
                  {item.orderDate},{item.orderTime}
                </Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>
                  {"\u20B9"} {item.orderTotal}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header headerTitle="Analytics" />
      {monthSelectionContainer()}
      {circularLoaderContainer()}
      <View style={styles.titleContainer}>
        <Text style={styles.monthTitle}>ORDERS ON SEPTEMBER MONTH : </Text>
      </View>
      <ScrollView>{montlyOrders()}</ScrollView>
    </View>
  );
};

export default Analytics;
