import React, {Component} from 'react';
import {View, Text, SafeAreaView,FlatList} from 'react-native';
import Header from '../../component/header/Header';
import styles from './AppointmentStyles';
import Line from '../../component/Line/Line';
import BottomArrow from '../../component/bottomArrow/BottomArrow';
import IMAGES from '../../../res/images';
import STRINGS from '../../utils/String';
import BinaryInfoButton from '../../component/button/BinaryInfoButton';
import SimpleToast from 'react-native-simple-toast';
import AppointmentItem from '../../component/appointment/AppointItem';
import AppointmentJSON from '../../../res/json/appointment.json'


export default class AppointmentScreen extends Component {

    constructor(props){
      super()
      this.state={
          appointmentList : AppointmentJSON.slotAppointments,
          slotList:AppointmentJSON.dates
      }
    }

  render() {
    console.log('AppointmentScreen+>>>',this.state.slotList)
    return (
      <SafeAreaView style={styles.parentView}>
        <Header />
        {this.renderButton()}

        <FlatList
            style={styles.appointmentListStyle}
              data={this.state.appointmentList}
              renderItem={({item, index}) => this.renderListItem(item)}
              showsVerticalScrollIndicator={false}
              extraData={this.state.blockList}
              bounces={false}
            />


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
      <View style={styles.buttonContainerStyle}>
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

  renderListItem=(item)=>{
    return(<View>
          {item.map(
                (appointmentItem) => (
                      <AppointmentItem
                          appointmentItem={appointmentItem}
                          date={this.state.slotList[0]}
                      />
                )
              )}
    </View>)
  }
}
