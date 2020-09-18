import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../component/header/Header';

export default class AppointmentScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    );
  }
}
