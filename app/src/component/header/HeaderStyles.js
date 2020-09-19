import {Dimensions, StyleSheet} from 'react-native';
import {fonts, getHeightScale, getWidthScale} from '../../utils/Utils';
import COLORS from '../../../res/colors/Colors';

const styles = StyleSheet.create({
  parentViewStyle: {
    height: getHeightScale(100),
    backgroundColor: COLORS.THEME_COLOR,
    width: '100%',
  },
  calendarViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleViewStyle: {
    height: getHeightScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  backButtonImageStyle: {
    width: getWidthScale(20),
    height: getWidthScale(20),
  },
  touchableOpacityStyle: {
    width: getWidthScale(40),
    height: getWidthScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextStyle: {
    fontSize: getWidthScale(16),
    color: COLORS.WHITE,
    fontFamily: fonts.bold,
  },

  datePickerStyle: {
    height: getHeightScale(40),
    width: Dimensions.get('window').width-getWidthScale(20),
    backgroundColor: COLORS.WHITE,
    borderRadius:getWidthScale(5),
    marginHorizontal:getWidthScale(10),
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  titleDropdownStyle:{
    fontSize:getWidthScale(16),
    color:COLORS.LIGHT_GREY,
    fontFamily:fonts.bold,
    paddingLeft:getWidthScale(30)
  }
});

export default styles;
