import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import styles from "./OTP.styles.ts";
import { RJInput, RJButton, LoadingIndicator } from "../../components";
import STRINGS from "./OTP.strings.ts";
import COLOR from "../../assets/utils/Color";

const ScreenHeight = Dimensions.get("window").height;

const OTP = ({ navigation }) => {
  const [isCode, setIsCode] = useState(null);
  const [isOtp, setIsOtp] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const onChangeEvent = (text) => {
    setIsOtp(text);
    console.log(text);
  };
  const onPressEvent = () => {
    console.log("Button clicked");
    navigation.navigate("CreateProfile");
    // if (isCode == isOtp) {
    //   navigation.navigate("CreateProfile");
    //   console.log("valid code");
    // } else {
    //   console.log("Invalid code");
    //   ToastAndroid.show("Invalid code !", ToastAndroid.SHORT);
    // }
  };

  useEffect(() => {
    generateOtp();
  }, []);

  const generateOtp = (value) => {
    const val = Math.floor(1000 + Math.random() * 9000);
    setIsCode(val);
    value && ToastAndroid.show("OTP sent successfully", ToastAndroid.SHORT);
    console.log(val);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{ height: ScreenHeight }}>
          <View style={styles.contentBlock}>
            <Image
              source={require("../../assets/images/otp.png")}
              style={{ width: 250, height: 250 }}
            />
            <Text style={styles.heading}>{STRINGS.OTP_VERIFICATION}</Text>
            <Text style={styles.subHeading}>{STRINGS.OTP_VERIFY_TEXT}</Text>
          </View>
          <View style={styles.inputBlock}>
            <RJInput
              placeholder={STRINGS.PLACEHOLDER_TEXT}
              value={isOtp}
              onChangeText={onChangeEvent}
              keyboardType={"number-pad"}
              maxLength={4}
            />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.subHeading}>{STRINGS.DIDNT_RECEIVE_OTP}</Text>
              <Text
                onPress={() => generateOtp("resend")}
                style={[styles.subHeading, { color: COLOR.buttonSolid }]}
              >
                {STRINGS.RESEND}
              </Text>
            </View>

            <RJButton
              title={STRINGS.BUTTON_TITLE}
              onPressEvent={onPressEvent}
              // disabled={!isOtp ? true : false}
              style={styles.button}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OTP;
