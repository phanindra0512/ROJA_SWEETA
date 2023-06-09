import { View, Text } from "react-native";
import React from "react";
import styles from "./MyAddress.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header, RJButton } from "../../components";

const EditProfile = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Saved Address"
        handleBack={navigateBack}
      />
      <Text style={styles.heading}>DEFAULT ADDRESS</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Sai phanindra</Text>
        <Text style={styles.subTitle}>Roja sweets</Text>
        <Text style={styles.subTitle}>
          Chintha chettu center,RRpeta , Eluru,
        </Text>
        <Text style={styles.subTitle}>Mobile : 9505876290</Text>
      </View>
    </View>
  );
};

export default EditProfile;
