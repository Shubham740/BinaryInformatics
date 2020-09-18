import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import COLORS from './app/res/colors/Colors'
import MainNavigation from './app/src/utils/navigation/AppNavigation';

export default class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
        <StatusBar
            backgroundColor={COLORS.BLUE}
            barStyle='dark-content'
          />
          <MainNavigation />
        </View>
    );
  }
}

