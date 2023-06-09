import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  PermissionsAndroid,
  Animated,
} from 'react-native';
import styles from './CreateProfile.styles.ts';
import COLOR from '../../assets/utils/Color';
import STRINGS from './CreateProfile.strings.ts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RJInput, RJButton, LoadingIndicator} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ScreenHeight = Dimensions.get('window').height;
const defaultImage =
  'https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png';

const options = {
  title: 'Select Image',
  takePhotoButtonTitle: 'Take pic',
  saveToPhotos: true,
  includeBase64: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const CreateProfile = ({navigation}) => {
  const [popAnim] = useState(new Animated.Value(0));

  const [isUserData, setUserData] = useState({
    profileImage: '',
    ownerName: '',
    emailId: '',
    mobileNumber: '',
    storeName: '',
    storeAddress: '',
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showPickOptions, setShowPickOptions] = useState(false);

  const handleOnChange = (text, input) => {
    setUserData(prevState => ({...prevState, [input]: text}));
  };
  const onPressEvent = () => {
    console.log('Button clicked', isUserData);
    storeData('profileSaved');
  };

  handleOpen = () => {
    setShowPickOptions(true);
    Animated.timing(popAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  handleClose = () => {
    setShowPickOptions(false);
    Animated.timing(popAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@ProfileCreated', value);
      setIsVisible(true);
      setTimeout(() => navigateToDashboard(), 3000);
    } catch (e) {
      console.log(e);
    }
  };

  const navigateToDashboard = () => {
    setIsVisible(false);
    navigation.navigate('Dashboard');
  };

  const captureImage = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      launchCamera(options, response => {
        // console.log("uri -> ", response.assets[0].uri);
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        handleOnChange(response.assets[0].uri, 'profileImage');
        handleClose();
      });
    }
  };

  selectFromGallery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      launchImageLibrary(options, response => {
        // console.log("uri -> ", response.assets[0].uri);
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        handleOnChange(response.assets[0].uri, 'profileImage');
        handleClose();
      });
    }
  };
  const createProfileBlock = () => {
    return (
      <View style={{height: 100, paddingTop: 30, paddingLeft: 15}}>
        <Text style={styles.Heading}>{STRINGS.CREATE_PROFILE}</Text>
        <Text style={styles.subHeading}>{STRINGS.DESCRIPTION}</Text>
      </View>
    );
  };

  const profileImageBlock = () => {
    return (
      <View style={{width: 80, alignSelf: 'center', marginTop: 30}}>
        <Image
          source={{uri: isUserData.profileImage || defaultImage}}
          style={{width: 80, height: 80, borderRadius: 50}}
        />
        <TouchableOpacity style={styles.editPicContainer} onPress={handleOpen}>
          <MaterialIcons name="camera-alt" color={COLOR.white} size={13} />
        </TouchableOpacity>
      </View>
    );
  };

  const profileForm = () => {
    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        <RJInput
          placeholder={STRINGS.OWNER_NAME}
          value={isUserData.ownerName}
          onChangeText={text => handleOnChange(text, 'ownerName')}
          keyboardType={'default'}
          style={{marginBottom: 30}}
        />

        <RJInput
          placeholder={STRINGS.EMAIL_ID}
          value={isUserData.emailId}
          onChangeText={text => handleOnChange(text, 'emailId')}
          keyboardType={'email-address'}
          style={{marginBottom: 30}}
        />

        <RJInput
          placeholder={STRINGS.MOBILE_NUMBER}
          value={isUserData.mobileNumber}
          onChangeText={text => handleOnChange(text, 'mobileNumber')}
          keyboardType={'default'}
          style={{marginBottom: 30}}
          // editable={false}
        />

        <RJInput
          placeholder={STRINGS.STORE_NAME}
          value={isUserData.storeName}
          onChangeText={text => handleOnChange(text, 'storeName')}
          keyboardType={'default'}
          style={{marginBottom: 30}}
        />

        <RJInput
          placeholder={STRINGS.STORE_ADDRESS}
          value={isUserData.storeAddress}
          onChangeText={text => handleOnChange(text, 'storeAddress')}
          keyboardType={'default'}
          style={{marginBottom: 30}}
          multiline={true}
          numberOfLines={3}
        />
      </View>
    );
  };

  const profileCreateModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <LottieView
            source={require('../../assets/images/saved.json')}
            style={{height: 70, width: 70}}
            autoPlay
            loop
          />
          <Text style={styles.profileCreated}>Profile Created</Text>
        </View>
      </View>
    );
  };

  const profileImageSelection = () => {
    return (
      <View style={styles.imageModalContainer}>
        <Animated.View style={styles.imageModalContent}>
          <Text style={styles.uploadTitle}>Upload Profile Image</Text>
          <Text style={styles.uploadSubtitle}>Choose your profile picture</Text>
          <View style={styles.imageSelectionBlock}>
            <TouchableOpacity
              onPress={captureImage}
              style={styles.selectionIcon}>
              <Image
                source={require('../../assets/images/camera.png')}
                style={{width: 55, height: 55}}
              />
              <Text style={styles.uploadSubtitle}>Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={selectFromGallery}
              style={styles.selectionIcon}>
              <Image
                source={require('../../assets/images/gallery.png')}
                style={{width: 55, height: 55}}
              />
              <Text style={styles.uploadSubtitle}>Gallery</Text>
            </TouchableOpacity>
          </View>
          <RJButton
            title={STRINGS.CANCEL}
            onPressEvent={handleClose}
            style={{backgroundColor: 'red'}}
          />
        </Animated.View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
        <View style={{flex: 1, backgroundColor: COLOR.buttonSolid}}>
          {createProfileBlock()}
          <View style={styles.contentBlock}>
            <ScrollView nestedScrollEnabled={true}>
              {profileImageBlock()}
              {profileForm()}
              <RJButton
                title={STRINGS.BUTTON_TITLE}
                onPressEvent={onPressEvent}
                // disabled={
                //   !isUserData.ownerName ||
                //   !isUserData.emailId ||
                //   !isUserData.mobileNumber ||
                //   !isUserData.storeName ||
                //   !isUserData.storeAddress
                //     ? true
                //     : false
                // }
                style={styles.button}
              />
            </ScrollView>
          </View>
          {isVisible && profileCreateModal()}
          {showPickOptions && profileImageSelection()}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateProfile;
