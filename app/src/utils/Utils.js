
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


/**
 * this method is used to get ther patient namr 
 * @param {*} patient : it contains the patientObject 
 */
  export function getPatientName(patient){
      
    let   patientName= ''
    if(patient.lastName!=null){
      patientName=     patient.title +' '+patient.firstName+' '+patient.lastName

      }else{
        patientName= patient.title +' '+patient.firstName
      }
      if(patientName.length>17){
       patientName= patientName.substring(0,14)+'...'
      }
        return patientName;
  }
  /**
   * this const is used to get the font family 
   */
  export const fonts = {
    regular: "OpenSans-Regular",
    semiBold: "OpenSans-Semibold",
    bold: "OpenSans-Bold",
    light: "OpenSans-Light",
  };

