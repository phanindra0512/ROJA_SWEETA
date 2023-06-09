import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './MobileNumber.styles.ts';
import {RJInput, RJButton, LoadingIndicator} from '../../components';
import STRINGS from './MobileNumber.strings.ts';
import axios from 'axios';

const ScreenHeight = Dimensions.get('window').height;

const MobileNumber = ({navigation}) => {
  const [isName, setIsName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeEvent = text => {
    setIsName(text);
    console.log(text);
  };

  const onPressEvent = () => {
    setIsLoading(true);
    setTimeout(() => navigateScreen(), 1000);
  };

  const navigateScreen = () => {
    setIsLoading(false);
    navigation.navigate('OTP');
  };

  const getData = () => {
    axios
      .get('http://192.168.0.101:7000/getAllBrands')
      .then(res => {
        console.log(res.data);
      })
      .catch(() => {
        console.log(res);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{height: ScreenHeight}}>
          <View style={styles.contentBlock}>
            <Image
              source={require('../../assets/images/verification.png')}
              style={{width: 250, height: 250, marginBottom: 30}}
            />
            <Text style={styles.heading}>{STRINGS.ENTER_MOBILE_NUMBER}</Text>
            <Text style={styles.subHeading}>{STRINGS.CODE_VERIFY_TEXT}</Text>
          </View>
          <View style={styles.inputBlock}>
            <RJInput
              placeholder={STRINGS.PLACE_HOLDER_TEXT}
              value={isName}
              onChangeText={onChangeEvent}
              keyboardType={'number-pad'}
              maxLength={10}
            />

            <RJButton
              title={STRINGS.BUTTON_TITLE}
              onPressEvent={onPressEvent}
              // disabled={!isName ? true : false}
              style={styles.button}
            />
            {/* <Button title="get data" onPress={getData} /> */}
          </View>
        </View>
        {isLoading && <LoadingIndicator />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MobileNumber;
