import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './MyCart.styles.ts';
import {Header, RJCartItem} from '../../components';
import {myCart} from '../../constants/MyCartItems.constants.ts';
import COLOR from '../../assets/utils/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';

var options = {
  description: 'Credits towards consultation',
  image: 'https://i.imgur.com/3g7nmJC.png',
  currency: 'INR',
  key: 'rzp_test_og4BBRJSPSxlaq', // Your api key
  amount: '5000',
  name: 'Phanindra',
  prefill: {
    email: 'void@razorpay.com',
    contact: '9191919191',
    name: 'Razorpay Software',
  },
  theme: {color: COLOR.buttonSolid},
};

const deliveryFee = 100;

const MyCart = ({navigation, route}) => {
  const orderDataToStore = {};

  const dataInStore = useSelector(state => state.myCart);

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleNextNavigation = () => {
    navigation.navigate('Payment', {
      payableAmount: route.params.finalVal + 100,
    });
  };

  const storeData = data => {
    orderDataToStore.orderItems = dataInStore;
    orderDataToStore.orderTotal = route.params.finalVal;
    orderDataToStore.deliveryFee = deliveryFee;
    orderDataToStore.orderId = 'RJ_12345';
    orderDataToStore.paymentStatus = 'SUCCESS';
    orderDataToStore.paymentId = data.razorpay_payment_id;
    console.log('orderDataToStore ===> ', orderDataToStore);
  };

  const initilizePayment = () => {
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        console.log('PAYMEWNT ----> ', data);
        storeData(data);
        navigation.navigate('SuccessScreen');
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const billDetails = () => {
    return (
      <View>
        <View style={styles.billCard}>
          <Text style={styles.title}>Item Total</Text>
          <Text style={styles.title}>
            {'\u20B9'} {route.params.finalVal}
          </Text>
        </View>

        <View style={styles.billCard}>
          <Text style={styles.title}>
            Delivery Fee <Text style={styles.star}>*</Text>
          </Text>
          <Text style={styles.title}>
            {'\u20B9'} {deliveryFee}
          </Text>
        </View>

        <View style={[styles.billCard, {paddingTop: 25}]}>
          <Text style={[styles.title, {fontFamily: 'Ubuntu-Bold'}]}>
            Total Payable
          </Text>
          <Text style={[styles.title, {fontFamily: 'Ubuntu-Bold'}]}>
            {'\u20B9'} {route.params.finalVal + 100}
          </Text>
        </View>
      </View>
    );
  };

  const totalIemsBlock = () => {
    return (
      <View style={styles.bottomContainer}>
        <View style={styles.amountContainer}>
          <Text style={[styles.count, {fontSize: 18, paddingBottom: 3}]}>
            {'\u20B9'}
            {route.params.finalVal + 100}
          </Text>
          <Text style={styles.count}>View Details</Text>
        </View>

        <TouchableOpacity
          onPress={initilizePayment}
          style={styles.nextNavigation}>
          <Text style={[styles.count, {fontSize: 18}]}>Proceed to pay</Text>
          <AntDesign
            name="caretright"
            size={12}
            color={COLOR.white}
            style={{paddingTop: 4, paddingLeft: 3}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
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
