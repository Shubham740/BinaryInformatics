import {Dimensions, StyleSheet} from 'react-native';
import {getHeightScale, getWidthScale} from '../../utils/Utils';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  bottomContainerStyle: {
    height: getHeightScale(100),
    width: '100%',
    position: 'absolute',
    marginTop: Dimensions.get('window').height - getHeightScale(100),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 2,
  },
  bottomViewStyle: {
    justifyContent: 'space-between',
    height: getHeightScale(100),
    marginHorizontal: getWidthScale(20),
    flexDirection: 'row',
  },
  patientTextStyle: {alignSelf: 'center'},
});
export default styles;
