import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./MyInfo.styles.ts";
import COLOR from "../../assets/utils/Color.ts";
import { Header, RJButton, RJInput } from "../../components";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const EditProfile = ({ navigation, route }) => {
  const { previous_screen } = route.params;

  const [isUserData, setUserData] = useState({
    ownerName: "Sai phanindra",
    emailId: "sai@gmail.com",
    mobileNumber: "9505876290",
    storeName: "roja sweets shop",
    storeAddress: "roja sweets shop,rrpet,eluru-534002",
  });

  const handleOnChange = (text, input) => {
    setUserData((prevState) => ({ ...prevState, [input]: text }));
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const onPressEvent = () => {
    console.log("Button clicked", isUserData);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.white }}>
      <Header
        leftIcon="arrow-back"
        headerTitle="My Information"
        handleBack={navigateBack}
      />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.profileBg}>
            <View style={styles.imageBg}>
              <Image
                source={require("../../assets/images/myPic.jpg")}
                style={{ width: 90, height: 90, borderRadius: 50 }}
              />
              {previous_screen === "EditProfile" ? (
                <TouchableOpacity style={styles.editPicContainer}>
                  <MaterialIcons
                    name="camera-alt"
                    color={COLOR.white}
                    size={13}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={{ marginTop: 80 }}>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.inputTitle}>Name</Text>
              <RJInput
                value={isUserData.ownerName}
                onChangeText={(text) => handleOnChange(text, "ownerName")}
                keyboardType={"default"}
                style={{ marginBottom: 15 }}
                editable={previous_screen === "EditProfile" ? true : false}
              />
            </View>

            <View style={{ alignSelf: "center" }}>
              <Text style={styles.inputTitle}>Mobile Number</Text>
              <RJInput
                value={isUserData.mobileNumber}
                onChangeText={(text) => handleOnChange(text, "mobileNumber")}
                keyboardType={"default"}
                style={{ marginBottom: 15 }}
                editable={previous_screen === "EditProfile" ? true : false}
              />
            </View>

            <View style={{ alignSelf: "center" }}>
              <Text style={styles.inputTitle}>Email</Text>
              <RJInput
                value={isUserData.emailId}
                onChangeText={(text) => handleOnChange(text, "emailId")}
                keyboardType={"email-address"}
                style={{ marginBottom: 15 }}
                editable={previous_screen === "EditProfile" ? true : false}
              />
            </View>

            <View style={{ alignSelf: "center" }}>
              <Text style={styles.inputTitle}>Store Name</Text>
              <RJInput
                value={isUserData.storeName}
                onChangeText={(text) => handleOnChange(text, "storeName")}
                keyboardType={"default"}
                style={{ marginBottom: 15 }}
                editable={previous_screen === "EditProfile" ? true : false}
              />
            </View>

            <View style={{ alignSelf: "center" }}>
              <Text style={styles.inputTitle}>Store Address</Text>
              <RJInput
                value={isUserData.storeAddress}
                onChangeText={(text) => handleOnChange(text, "storeAddress")}
                keyboardType={"default"}
                style={{ marginBottom: 15 }}
                editable={previous_screen === "EditProfile" ? true : false}
                multiline={true}
                numberOfLines={3}
              />
            </View>

            {previous_screen === "EditProfile" ? (
              <RJButton
                title={"Save Changes"}
                onPressEvent={onPressEvent}
                disabled={false}
                style={styles.button}
              />
            ) : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditProfile;
