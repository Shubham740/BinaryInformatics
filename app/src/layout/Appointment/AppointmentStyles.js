import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../../res/colors/Colors';
import {fonts, getHeightScale, getWidthScale} from '../../utils/Utils';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  bottomContainerStyle: {
    height: getHeightScale(70),
    width: '100%',
    position: 'absolute',
    marginTop: Dimensions.get('window').height - getHeightScale(70),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 2,
  },
  bottomViewStyle: {
    justifyContent: 'space-between',
    height: getHeightScale(70),
    marginHorizontal: getWidthScale(20),
    flexDirection: 'row',
  },
  patientTextStyle: {
    alignSelf: 'center',
    fontSize: getWidthScale(10),
    fontFamily: fonts.bold,
    paddingHorizontal:getWidthScale(20),
    color:COLORS.BLACK
  },
});
export default styles;
