import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Header, EmptyData } from "../../components";
import styles from "./ViewOrders.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { myOrders } from "../../constants/MyOrders.constants.ts";

const ViewOrders = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate("OrderDetails");
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="My Orders"
        handleBack={navigateBack}
      />
      <View style={{ flex: 1 }}>
        <ScrollView>
          {myOrders.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.5}
                onPress={handleNavigation}
                style={styles.cardContainer}
              >
                <View style={styles.itemsBlock}>
                  <Text numberOfLines={2} style={styles.items}>
                    {item.orderItems}
                  </Text>
                  <Text style={styles.totalAmount}>
                    {"\u20B9"}
                    {item.orderTotal}
                  </Text>
                </View>

                <View style={styles.orderInfoBlock}>
                  <View>
                    <Text style={styles.orderInfo}>
                      Order ID : {item.orderID}
                    </Text>
                    <Text style={styles.orderInfo}>
                      {item.orderDate},{item.orderTime}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.statusContainer,
                      {
                        backgroundColor:
                          item.orderStatus === "Delivered"
                            ? COLOR.green
                            : COLOR.warning,
                      },
                    ]}
                  >
                    <Text style={styles.status}>{item.orderStatus}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          <View style={{ marginTop: 30 }}>
            {myOrders.length == 0 && (
              <EmptyData
                image={require("../../assets/images/No_transactions.png")}
                imageStyle={{ width: 50, height: 50 }}
                message={"No orders found..."}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ViewOrders;
