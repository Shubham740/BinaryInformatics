import React from 'react';
import {View, StatusBar} from 'react-native';
import COLORS from './app/res/colors/Colors';
import MainNavigation from './app/src/utils/navigation/AppNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.THEME_COLOR} barStyle="dark-content" />
      <MainNavigation />
    </View>
  );
};
export default App;
