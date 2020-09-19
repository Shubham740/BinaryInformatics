import {StyleSheet} from 'react-native';
import COLORS from '../../../res/colors/Colors';
import {fonts, getHeightScale, getWidthScale} from '../../utils/Utils';

const styles = StyleSheet.create({
  parentView: {
    height: getHeightScale(40),
    borderWidth:getWidthScale(1),
    borderColor:COLORS.THEME_COLOR,
    borderRadius:getWidthScale(10),
    alignItems:'center',
    justifyContent:'center'

  },
  labelStyle:{
    fontFamily:fonts.bold,
    fontSize:getWidthScale(12),
    color:COLORS.THEME_COLOR
  }
});

export default styles;
