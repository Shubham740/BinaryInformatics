import {Dimensions, StyleSheet} from 'react-native';
import {getHeightScale} from '../../utils/Utils';

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },

  bottomViewStyle: {
    height: getHeightScale(100),
    width: '100%',
    position: 'absolute',
    marginTop: Dimensions.get('window').height - getHeightScale(100),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 2,
  },
});
export default styles;
