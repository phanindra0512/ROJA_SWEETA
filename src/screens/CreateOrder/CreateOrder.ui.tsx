import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './CreateOrder.styles.ts';
import COLOR from '../../assets/utils/Color';
import STRINGS from './Dashboard.strings.ts';
import {myProducts} from '../../constants/CreateOrder.constants.ts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header, RJSearchBar, RJItemCard, VerticalLine} from '../../components';
import {useSelector} from 'react-redux';

const CreateOrder = ({navigation}) => {
  let finalVal = 0;
  const dataInStore = useSelector(state => state.myCart);
  console.log('MYCART ===> ', dataInStore);
  const [isSearchItem, setIsSearchItem] = useState('');

  const cartNavigation = () => {
    navigation.navigate('MyCart', {finalVal: finalVal});
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleNextNavigation = () => {
    navigation.navigate('MyCart', {finalVal: finalVal});
  };

  const totalIemsBlock = () => {
    const grandTotal = dataInStore.map(item => {
      return item.productCount * item.productPrice;
    });
    finalVal = grandTotal.reduce((acc, curr) => acc + curr, 0);
    console.log('grandTotal....>', grandTotal);
    console.log('finalVal....>', finalVal);

    return (
      <View style={styles.bottomContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.count}>{dataInStore.length} ITEMS</Text>
          <Text style={[styles.count, {fontSize: 18}]}>
            {'\u20B9'}
            {finalVal}
            <Text style={[styles.count, {fontSize: 14}]}>{''} total</Text>
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNextNavigation}
          style={styles.nextNavigation}>
          <Text style={[styles.count, {fontSize: 18}]}>Next</Text>
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
    <View style={styles.container}>
      <Header
        leftIcon="arrow-back"
        rightIcon="shoppingcart"
        headerTitle="Create Order"
        badgeCount={dataInStore.length || undefined}
        handleCartNavigation={cartNavigation}
        handleBack={navigateBack}
      />
      <RJSearchBar
        value={isSearchItem}
        onChangeValue={text => setIsSearchItem(text)}
        onValueSubmit={() => alert(isSearchItem)}
      />

      <ScrollView style={{marginBottom: 50, marginTop: 10}}>
        {myProducts.map((product, index) => {
          return (
            <View key={index}>
              <RJItemCard data={product} dataInStore={dataInStore} />
              <VerticalLine />
            </View>
          );
        })}
      </ScrollView>
      {dataInStore.length == 0 ? null : totalIemsBlock()}
    </View>
  );
};

export default CreateOrder;
