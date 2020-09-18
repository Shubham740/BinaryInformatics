
import { Dimensions } from 'react-native';

const standardWidth = 375.0;
const standardHeight = 767.0;

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;


/**
 * this method is used to get the width scale
 * @param {*} dimensions : it contains the dimensions
 */
export function getWidthScale(dimensions) {
    return (dimensions / standardWidth) * myWidth;
  }
  /**
   * this method is used to get the height scale
   * @param {*} dimensions : it contains the dimensions.
   */
  export function getHeightScale(dimensions) {
    return (dimensions / standardHeight) * myHeight;
  }