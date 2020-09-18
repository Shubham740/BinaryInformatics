import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import AppointmentScreen from '../../layout/Appointment/AppointmentScreen';

const appointmentNavigator = createStackNavigator(
  {
    AppointmentScreen: AppointmentScreen,
  },
  {
    initialRouteName: 'AppointmentScreen',
    headerMode: 'none',
  },
);

const AppNavigation = createAppContainer(appointmentNavigator);

export let AppNavigationReference = null;
export default class MainNavigation extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigation
          ref={ref => {
            AppNavigationReference = ref;
          }}
          {...this.props}
        />
      </View>
    );
  }
}

