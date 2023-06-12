/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './OrderDetails.styles.ts';
import {Header, RJSquareButton, VerticalLine} from '../../components';
import COLOR from '../../assets/utils/Color';

const OrderDetails = ({navigation, route}) => {
  const {orderData} = route.params;
  const navigateBack = () => {
    navigation.goBack();
  };
  const grandTotal = orderData.orderItems.map(item => {
    return item.productCount * item.productPrice;
  });
  finalVal = grandTotal.reduce((acc, curr) => acc + curr, 0);

  const orderItems = () => {
    return (
      <>
        {orderData.orderItems.map(orderItem => {
          return (
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: "red",
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <RJSquareButton />
                <View style={{paddingLeft: 15}}>
                  <Text style={styles.prodName}>{orderItem.productName}</Text>
                  <Text style={styles.subText}>{orderItem.size}</Text>
                  <Text style={[styles.prodName, {color: COLOR.dullBlack}]}>
                    {orderItem.productCount} x {'\u20B9'}{' '}
                    {orderItem.productPrice}
                  </Text>
                </View>
              </View>
              <Text
                style={[
                  styles.prodName,
                  {alignSelf: 'flex-end', color: COLOR.dullBlack},
                ]}>
                {'\u20B9'} {orderItem.productCount * orderItem.productPrice}
              </Text>
            </View>
          );
        })}
      </>
    );
  };

  const amountContainer = () => {
    return (
      <View>
        <View style={[styles.costContainer, {paddingTop: 0}]}>
          <Text style={styles.prodName}>Item Total</Text>
          <Text style={styles.prodName}>
            {'\u20B9'} {finalVal}
          </Text>
        </View>
        <View style={[styles.costContainer, {paddingVertical: 0}]}>
          <Text style={[styles.subText, {color: COLOR.dullBlack}]}>
            Delivery fee
          </Text>
          <Text style={[styles.subText, {color: COLOR.dullBlack}]}>
            {'\u20B9'} {orderData.deliveryFee}
          </Text>
        </View>
        <VerticalLine />

        <View style={styles.costContainer}>
          <Text style={[styles.prodName, {fontSize: 17}]}>Total Payable</Text>
          <Text style={[styles.prodName, {fontSize: 17}]}>
            {'\u20B9'} {finalVal + orderData.deliveryFee}
          </Text>
        </View>
      </View>
    );
  };

  const orderDetails = () => {
    return (
      <View>
        <View style={{paddingTop: 15}}>
          <Text style={styles.ordertitle}>Order Number</Text>
          <Text style={styles.orderContent}>{orderData.orderId}</Text>
        </View>

        <View style={{paddingTop: 15}}>
          <Text style={styles.ordertitle}>Payment</Text>
          <Text style={styles.orderContent}>PAID : UPI PAY</Text>
        </View>

        <View style={{paddingTop: 15}}>
          <Text style={styles.ordertitle}>Date</Text>
          <Text style={styles.orderContent}>
            {orderData.orderDate}, {orderData.orderTime}
          </Text>
        </View>

        <View style={{paddingTop: 15}}>
          <Text style={styles.ordertitle}>Delivery to</Text>
          <Text numberOfLines={2} style={styles.orderContent}>
            {orderData.deliveryAddress}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Order Detail"
        handleBack={navigateBack}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 15,
            paddingVertical: 5,
          }}>
          <Text style={styles.heading}>Your Order</Text>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  orderData.orderStatus === 'Delivered'
                    ? COLOR.green
                    : COLOR.warning,
              },
            ]}>
            <Text style={styles.status}>{orderData.orderStatus}</Text>
          </View>
        </View>

        <View style={styles.itemsCard}>
          {orderItems()}
          <VerticalLine />
          {amountContainer()}
        </View>
        <Text style={styles.heading}>Order Details</Text>

        <View style={[styles.itemsCard, {paddingLeft: 10}]}>
          {orderDetails()}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;
