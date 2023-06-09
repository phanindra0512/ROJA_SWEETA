import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Header, RJRadioButton } from "../../components";
import styles from "./Payment.styles.ts";
import COLOR from "../../assets/utils/Color";
import RNUpiPayment from "react-native-upi-pay";

const payOptions = [
  {
    id: 1,
    type: "UPI Payment",
  },
  {
    id: 2,
    type: "Cash on Delivery",
  },
];
const Payment = ({ navigation, route }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const [selected, setIsSelected] = useState("UPI Payment");

  const selectOption = (item) => {
    setIsSelected(item);
  };

  const handleSuccessNavigation = () => {
    if (selected === "UPI Payment") {
      pay();
    } else {
      navigation.navigate("SuccessScreen");
    }
  };
  const pay = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: "9949544127@ybl", // or can be john@ybl or mobileNo@upi
        payeeName: "raju",
        amount: "1",
        transactionRef: "aasf-332-aoei-fn",
      },
      failureCallback,
      successCallback
    );
  };

  const failureCallback = (data) => {
    console.log("fail", data);
  };

  const successCallback = (data) => {
    console.log("success data", data);
    navigation.navigate("SuccessScreen");
    console.log("success");
  };

  const addressContent = () => {
    return (
      <View style={styles.addressBlock}>
        <Text style={styles.addressContent}>
          Deliver to :{" "}
          <Text style={{ fontFamily: "Ubuntu-Medium", color: COLOR.black }}>
            Phanindra nani,
          </Text>
        </Text>
        <Text
          style={[styles.addressContent, { paddingTop: 5, lineHeight: 18 }]}
        >
          23b-7-21,Vasa vari street,opp.thrinath fashions,upstair DTDC courier
          service,RRPeta,Eluru
        </Text>
      </View>
    );
  };

  const totalIemsBlock = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.amountContainer}>
          <Text style={[styles.count, { fontSize: 18, paddingBottom: 3 }]}>
            {"\u20B9"}
            {route.params.payableAmount}
          </Text>
          <Text style={styles.count}>View Details</Text>
        </View>

        <TouchableOpacity
          onPress={handleSuccessNavigation}
          style={styles.nextNavigation}
        >
          <Text style={[styles.count, { fontSize: 18, color: COLOR.white }]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const paymentOptions = () => {
    return (
      <View>
        {payOptions.map((item) => {
          return (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => selectOption(item.type)}
                style={styles.outerCircle}
              >
                {selected === item.type ? (
                  <View style={styles.innerCircle} />
                ) : null}
              </TouchableOpacity>

              <Text
                style={[
                  styles.title,
                  {
                    fontWeight: selected === item.type ? "400" : null,
                    color: selected === item.type ? COLOR.black : null,
                  },
                ]}
              >
                {item.type}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Payment"
        handleBack={navigateBack}
      />
      {addressContent()}
      <Text style={styles.heading}>Payment Options</Text>

      <View style={styles.itemsCard}>
        {/* {paymentOptions.map((payType) => {
          return (
            <RJRadioButton
              selectOption={selectOption}
              selected={selected}
              title={payType.type}
            />
          );
        })} */}

        {paymentOptions()}
      </View>
      {totalIemsBlock()}
    </View>
  );
};

export default Payment;
