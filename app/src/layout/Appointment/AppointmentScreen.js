import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../component/header/Header';
import styles from './AppointmentStyles'
import Line from '../../component/Line/Line'
import BottomArrow from '../../component/bottomArrow/BottomArrow'
import { getHeightScale } from '../../utils/Utils';
import IMAGES from '../../../res/images';
import STRINGS from '../../utils/String';


export default class AppointmentScreen extends Component {
  render() {
    return (
      <SafeAreaView
      style={styles.parentView}
      >
        <Header />
            {this.renderBottomView()}
      </SafeAreaView>
    );
  }


  renderBottomView=()=>{
      return(

       
        <View
        style={styles.bottomContainerStyle}
        >
                 
          <Line/>
          <View
          style={styles.bottomViewStyle}
          >
          <BottomArrow
          image={IMAGES.ARROW_LEFT_UNSELECTED}
          />
          <BottomArrow
          image={IMAGES.ARROW_LEFT_SELECTED}
          />
    <Text
    style={styles.patientTextStyle}
    >{STRINGS.PATIENT_LIST}</Text>


          <BottomArrow
          image={IMAGES.ARROW_RIGHT_SELECTED}
          />
         <BottomArrow
          image={IMAGES.ARROW_RIGHT_UNSELECTED}
          />
          </View>
        </View>

      )
  }
}
