import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../assets/utils/Color';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
    backgroundColor: COLOR.buttonSolid,
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 7,
  },
  amountContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  count: {
    fontSize: 11,
    fontFamily: 'Ubuntu-Medium',
    color: COLOR.white,
    paddingBottom: 2,
  },
  nextNavigation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 20,
  },
});
export default styles;
