import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dashboard, Categories, Profile, Analytics} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabBar} from '../components';
import {StyleSheet, Image} from 'react-native';
import COLOR from '../assets/utils/Color.ts';

const BOTTOMTAB_IMAGES = {
  home: {
    imgName: 'home',
    uri: require('../assets/images/home.png'),
  },
  categories: {
    imgName: 'categories',
    uri: require('../assets/images/category.png'),
  },
  analytics: {
    imgName: 'analytics',
    uri: require('../assets/images/analytics.png'),
  },
  profile: {
    imgName: 'profile',
    uri: require('../assets/images/profile.png'),
  },
};

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLOR.buttonSolid,
        tabBarInactiveTintColor: COLOR.darkGray,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: {
          fontSize: 9,
          fontFamily: 'Ubuntu-Bold',
          paddingTop: 4,
        },
        tabBarIcon: ({color, size, focused}) => {
          let iconName, iconColor;
          if (route.name === 'Dashboard') {
            iconName = BOTTOMTAB_IMAGES.home.uri;
            iconColor = focused ? COLOR.buttonSolid : COLOR.darkGray;
          }
          if (route.name === 'Categories') {
            iconName = BOTTOMTAB_IMAGES.categories.uri;
            iconColor = focused ? COLOR.buttonSolid : COLOR.darkGray;
          }
          if (route.name === 'Profile') {
            iconName = BOTTOMTAB_IMAGES.profile.uri;
            iconColor = focused ? COLOR.buttonSolid : COLOR.darkGray;
          }
          if (route.name === 'Analytics') {
            iconName = BOTTOMTAB_IMAGES.analytics.uri;
            iconColor = focused ? COLOR.buttonSolid : COLOR.darkGray;
          }
          return (
            // <MaterialCommunityIcons name={iconName} color={color} size={27} />
            <Image
              source={iconName}
              style={{width: 35, height: 35, tintColor: iconColor}}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarButton: props => <BottomTabBar {...props} />,
          tabBarLabel: 'HOME',
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarButton: props => <BottomTabBar {...props} />,
          tabBarLabel: 'CATEGORIES',
        }}
      />

      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarButton: props => <BottomTabBar {...props} />,
          tabBarLabel: 'ANALYTICS',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: props => <BottomTabBar {...props} />,
          tabBarLabel: 'MY PROFILE',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    // borderTopWidth: 1,
  },
});
