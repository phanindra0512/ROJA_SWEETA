import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './Dashboard.styles.ts';
import COLOR from '../../assets/utils/Color';
import STRINGS from './Dashboard.strings.ts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DashboardOrderStatus,
  myServices,
} from '../../constants/DashboardOrderStatus.constants.ts';
import {popularItems} from '../../constants/PopularItems.constants.ts';
import {myOrders} from '../../constants/MyOrders.constants.ts';
import {
  ImageCarousel,
  VerticalLine,
  RJItemCard,
  EmptyData,
} from '../../components';

const Dashboard = ({navigation}) => {
  const [isWishText, setIsWishText] = useState('');

  useEffect(() => {
    getWishText();
  }, []);

  const getWishText = () => {
    var myDate = new Date();
    var currentTime = myDate.getHours();

    if (currentTime >= 0 && currentTime <= 12) {
      setIsWishText('Good Morning');
    } else if (currentTime > 12 && currentTime <= 18) {
      setIsWishText('Good Afternoon');
    } else {
      setIsWishText('Good Evening');
    }
  };
  const headerContainer = () => {
    return (
      <View style={styles.headerBlock}>
        <View>
          <Text style={[styles.subHeading, {color: COLOR.whiteDull}]}>
            {isWishText}
          </Text>
          <Text style={[styles.heading, {color: COLOR.white}]}>
            {STRINGS.USER_NAME}
          </Text>
        </View>

        <TouchableOpacity onPress={() => handleServiceNavigation('MyProfile')}>
          <Image
            source={require('../../assets/images/myPic.jpg')}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const orderStatusContainer = () => {
    return (
      <View style={styles.ordersBlock}>
        {DashboardOrderStatus?.map((order, index) => {
          return (
            <View
              key={index}
              style={[
                styles.orderCountBlock,
                {borderRightWidth: order.id == 3 ? 0 : 1.5},
              ]}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name={order.iconName}
                  size={20}
                  style={{marginTop: 4}}
                  color={COLOR.headings}
                />
                <View style={{marginLeft: 6}}>
                  <Text style={[styles.heading, {color: COLOR.buttonSolid}]}>
                    {order.orderCount}
                  </Text>
                  <Text style={styles.subHeading}>{order.orderTitle}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  const ourServices = () => {
    return (
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesHeading}>{STRINGS.OUR_SERVICES}</Text>
        <View style={{flexDirection: 'row'}}>
          {myServices.map(serviceItem => {
            return (
              <View key={serviceItem.id} style={styles.servicesBlock}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.cardContainer}
                  onPress={() => handleServiceNavigation(serviceItem.title)}>
                  <Image
                    source={serviceItem.image}
                    style={{width: 45, height: 45}}
                  />
                </TouchableOpacity>
                <Text style={styles.servicesTitle}>{serviceItem.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const populatItems = () => {
    return (
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesHeading}>{STRINGS.POPULAR_ITEMS}</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            {popularItems.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    handleServiceNavigation(STRINGS.POPULAR_ITEMS, item)
                  }
                  style={styles.card}>
                  <View style={{flex: 1}}>
                    <Image
                      source={item.productImage}
                      style={styles.cardImage}
                    />
                  </View>
                  <View style={{flex: 0.5, paddingHorizontal: 10}}>
                    <Text numberOfLines={1} style={styles.cardTitle}>
                      {item.productName}
                    </Text>
                    <View style={{flexDirection: 'row', paddingTop: 2}}>
                      <Text style={styles.cardContent}>Size : {item.size}</Text>
                      <Text style={[styles.cardContent, {paddingLeft: 10}]}>
                        Quantity : {item.quantity}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  };

  const latestTransactions = () => {
    return (
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesHeading}>
          {STRINGS.RECENT_TRANSACTIONS}
        </Text>

        {myOrders?.map(item => {
          return (
            <TouchableOpacity
              onPress={() =>
                handleServiceNavigation(STRINGS.RECENT_TRANSACTIONS)
              }
              key={item.id}
              style={styles.transactionCard}>
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
                  {'\u20B9'} {item.orderTotal}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {myOrders.length == 0 && (
          <EmptyData
            image={require('../../assets/images/No_transactions.png')}
            imageStyle={{width: 50, height: 50}}
            message={'No transactions found...'}
          />
        )}
      </View>
    );
  };
  const handleServiceNavigation = (title, itemData) => {
    if (title === STRINGS.CREATE_ORDER) {
      navigation.navigate('CreateOrder');
    } else if (title === STRINGS.VIEW_ORDERS) {
      navigation.navigate('ViewOrders');
    } else if (title === STRINGS.RECENT_TRANSACTIONS) {
      navigation.navigate('OrderDetails');
    } else if (title === STRINGS.POPULAR_ITEMS) {
      navigation.navigate('ItemDetail', {data: itemData});
    } else if (title === 'MyProfile') {
      navigation.navigate('MyInfo', {
        previous_screen: 'Home',
      });
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.container, {marginBottom: 100}]}>
        <View style={styles.backgroundContainer}>{headerContainer()}</View>
        <View style={{marginVertical: 20}}>{orderStatusContainer()}</View>
        <View style={styles.coroselContainer}>
          <ImageCarousel />
        </View>
        {ourServices()}
        <VerticalLine />
        {latestTransactions()}
        {populatItems()}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
