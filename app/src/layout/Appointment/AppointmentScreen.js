import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../component/header/Header';
import styles from './AppointmentStyles'
import Line from '../../component/Line/Line'
export default class AppointmentScreen extends Component {
  render() {
    return (
      <SafeAreaView
      style={styles.parentView}
      >
        <Header />
        <View
        style={styles.bottomViewStyle}
        >
                
                    
          <Line/>

        </View>
      </SafeAreaView>
    );
  }
}
