import { View, Text } from "react-native";
import React from "react";
import styles from "./EditProfile.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header, RJButton } from "../../components";

const EditProfile = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="Edit Profile"
        handleBack={navigateBack}
      />
    </View>
  );
};

export default EditProfile;
