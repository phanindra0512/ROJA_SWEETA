import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./RJItemCard.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartIncrementCounter,
  cartDecrementCounter,
  deleteFromCart,
} from "../../redux/actions/cartCounterAction.js";

const RJItemCard = (props) => {
  const dispatch = useDispatch();
  const { data, dataInStore } = props;
  const [isAdd, setIsAdd] = useState(false);
  const [isCount, setIsCount] = useState(1);

  // console.log("DATA IN STORE ===> ", dataInStore);

  const addButtonHandler = () => {
    setIsAdd(true);
    dispatch(addToCart(data, isCount));
  };

  // Need to find solution after changing count in cart sreen and
  // come back to create order screen, count was not matching

  const incrementCount = () => {
    setIsCount(isCount + 1);
    dispatch(cartIncrementCounter(data, isCount + 1));
  };

  const decrementCount = () => {
    if (itemCount() > 1) {
      setIsCount(itemCount() - 1);
      dispatch(cartDecrementCounter(data, itemCount() - 1));
    } else {
      setIsAdd(false);
      dispatch(deleteFromCart(data));
    }
  };

  const counterStatus = () => {
    const resultData = dataInStore.find((item) => item.id == data.id);
    if (resultData) {
      return true;
    } else {
      return false;
    }
  };

  const itemCount = () => {
    const resultItemCount = dataInStore.find((item) => item.id == data.id);
    return resultItemCount?.productCount;
  };

  const addButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={addButtonHandler}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>ADD</Text>
      </TouchableOpacity>
    );
  };

  const counter = () => {
    return (
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={decrementCount} style={styles.countBlock}>
          <MaterialCommunityIcons name="minus" size={22} color="white" />
        </TouchableOpacity>
        <View style={[styles.countBlock, { backgroundColor: "white" }]}>
          <Text style={[styles.buttonTitle, { color: COLOR.black }]}>
            {itemCount() || isCount}
          </Text>
        </View>
        <TouchableOpacity onPress={incrementCount} style={styles.countBlock}>
          <MaterialCommunityIcons name="plus" size={22} color={COLOR.white} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View key={data.id} style={styles.cardContainer}>
      <Image source={data.productImage} style={styles.image} />
      <View style={styles.contentBlock}>
        <Text style={styles.prodName}>{data.productName}</Text>

        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <View style={styles.sizeContainer}>
            <Text style={styles.title}>SIZE</Text>
            <Text style={styles.subHeading}>{data.size}</Text>
          </View>

          <View style={styles.sizeContainer}>
            <Text style={styles.title}>PIECES</Text>
            <Text style={styles.subHeading}>{data.quantity}</Text>
          </View>

          {/* <View style={styles.sizeContainer}>
            <Text style={styles.title}>PRICE</Text>
            <Text style={styles.subHeading}>
              {"\u20B9"} {data.productPrice}
            </Text>
          </View> */}
        </View>

        {/* <Text numberOfLines={2} style={styles.description}>
          {data.productDescription}
        </Text> */}
      </View>
      <View style={styles.counterBlock}>
        <Text style={styles.prodPrice}>
          {"\u20B9"}{" "}
          {itemCount() * data.productPrice || isCount * data.productPrice}
        </Text>
        {isAdd || counterStatus() ? counter() : addButton()}
      </View>
    </View>
  );
};

export default RJItemCard;
