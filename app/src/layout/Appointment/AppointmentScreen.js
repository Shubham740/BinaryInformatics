import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../component/header/Header';
import styles from './AppointmentStyles';
import Line from '../../component/Line/Line';
import BottomArrow from '../../component/bottomArrow/BottomArrow';
import IMAGES from '../../../res/images';
import STRINGS from '../../utils/String';
import BinaryInfoButton from '../../component/button/BinaryInfoButton';
import SimpleToast from 'react-native-simple-toast';

export default class AppointmentScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.parentView}>
        <Header />
        {this.renderButton()}

        {this.renderBottomView()}
      </SafeAreaView>
    );
  }

  renderBottomView = () => {
    return (
      <View style={styles.bottomContainerStyle}>
        <Line />
        <View style={styles.bottomViewStyle}>
          <BottomArrow image={IMAGES.ARROW_LEFT_UNSELECTED} />
          <BottomArrow image={IMAGES.ARROW_LEFT_SELECTED} />
          <Text style={styles.patientTextStyle}>{STRINGS.PATIENT_LIST}</Text>
          <BottomArrow image={IMAGES.ARROW_RIGHT_SELECTED} />
          <BottomArrow image={IMAGES.ARROW_RIGHT_UNSELECTED} />
        </View>
      </View>
    );
  };

  callback = () => {
    SimpleToast.show(STRINGS.COMING_SOON);
  };

  renderButton = () => {
    return (
      <View
      style={styles.buttonContainerStyle}
      >
        <BinaryInfoButton
          containerButton={styles.dateButtonViewStyle}
          label={STRINGS.DATE}
          callback={this.callback}
        />
        <BinaryInfoButton
          containerButton={styles.walkinButtonViewStyle}
          label={STRINGS.ADD_WALKIN}
          callback={this.callback}
        />
        
      </View>
    );
  };
}
