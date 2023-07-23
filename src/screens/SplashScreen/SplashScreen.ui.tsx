import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLOR from '../../assets/utils/Color.ts';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    displayData();
  }, []);

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('@ProfileCreated');
      console.log('async value is : ' + user);
      setTimeout(() => {
        if (user == null) {
          navigation.replace('MobileNumber');
        } else {
          navigation.replace('Dashboard');
        }
      }, 3000);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.buttonSolid,
      }}>
      <Image
        source={require('../../assets/images/RJ_Logo.png')}
        style={{width: 60, height: 60}}
      />
    </View>
  );
};

export default SplashScreen;
