import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./MyCart.styles.ts";
import { Header, RJCartItem } from "../../components";
import { myCart } from "../../constants/MyCartItems.constants.ts";
import COLOR from "../../assets/utils/Color";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";

const MyCart = ({ navigation, route }) => {
  const dataInStore = useSelector((state) => state.myCart);

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleNextNavigation = () => {
    navigation.navigate("Payment", {
      payableAmount: route.params.finalVal + 100,
    });
  };
  const billDetails = () => {
    return (
      <View>
        <View style={styles.billCard}>
          <Text style={styles.title}>Item Total</Text>
          <Text style={styles.title}>
            {"\u20B9"} {route.params.finalVal}
          </Text>
        </View>

        <View style={styles.billCard}>
          <Text style={styles.title}>
            Delivery Fee <Text style={styles.star}>*</Text>
          </Text>
          <Text style={styles.title}>{"\u20B9"} 100</Text>
        </View>

        <View style={[styles.billCard, { paddingTop: 25 }]}>
          <Text style={[styles.title, { fontFamily: "Ubuntu-Bold" }]}>
            Total Payable
          </Text>
          <Text style={[styles.title, { fontFamily: "Ubuntu-Bold" }]}>
            {"\u20B9"} {route.params.finalVal + 100}
          </Text>
        </View>
      </View>
    );
  };

  const totalIemsBlock = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.amountContainer}>
          <Text style={[styles.count, { fontSize: 18, paddingBottom: 3 }]}>
            {"\u20B9"}
            {route.params.finalVal + 100}
          </Text>
          <Text style={styles.count}>View Details</Text>
        </View>

        <TouchableOpacity
          onPress={handleNextNavigation}
          style={styles.nextNavigation}
        >
          <Text style={[styles.count, { fontSize: 18 }]}>Proceed to pay</Text>
          <AntDesign
            name="caretright"
            size={12}
            color={COLOR.white}
            style={{ paddingTop: 4, paddingLeft: 3 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Cart"
        handleBack={navigateBack}
      />
      <ScrollView>
        <Text style={styles.heading}>Your Order</Text>

        <View style={styles.itemsCard}>
          {dataInStore.map((item, index) => {
            return <RJCartItem key={index} data={item} />;
          })}
        </View>

        <Text style={styles.heading}>Bill Details</Text>
        <View style={styles.itemsCard}>{billDetails()}</View>
      </ScrollView>
      <View style={styles.addressDetails}>
        <Text style={styles.heading}>Delivery Details</Text>
        <Text numberOfLines={2} style={styles.address}>
          23b-7-21,Vasa vari street,opp.thrinath fashions,upstair DTDC courier
          service,RRPeta,Eluru
        </Text>
        {totalIemsBlock()}
      </View>
    </View>
  );
};

export default MyCart;
