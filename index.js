/**
 * @format
 */

import {AppRegistry,LogBox} from 'react-native';
import App from './App';
// import AppointmentScreen  from './app/src/layout/Appointment/AppointmentScreen'
import {name as appName} from './app.json';
LogBox.ignoreAllLogs()
AppRegistry.registerComponent(appName, () => App);
