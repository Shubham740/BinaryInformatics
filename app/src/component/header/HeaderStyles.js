import {StyleSheet} from 'react-native';
import {getHeightScale, getWidthScale} from '../../utils/Utils';
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
  },
});

export default styles;
