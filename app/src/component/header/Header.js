import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './HeaderStyles';
import IMAGES from '../../../res/images';
import STRINGS from '../../utils/String';
export default class Header extends Component {
  render() {
    return (
      <View style={styles.parentViewStyle}>
        <View style={styles.titleViewStyle}>

          <View style={styles.calendarViewStyle}>
            <TouchableOpacity style={styles.touchableOpacityStyle}>
              <Image
                source={IMAGES.ARROW}
                resizeMode={'contain'}
                style={styles.backButtonImageStyle}></Image>
            </TouchableOpacity>

            <Text style={styles.titleTextStyle}>{STRINGS.APPOINTMENT}</Text>
          </View>
         <View
         style={styles.calendarViewStyle}
         >
         <TouchableOpacity style={styles.touchableOpacityStyle}>
              <Image
                source={IMAGES.CALENDAR_CROSS}
                resizeMode={'contain'}
                style={styles.backButtonImageStyle}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacityStyle}>
              <Image
                source={IMAGES.CALENDAR_CROSS}
                resizeMode={'contain'}
                style={styles.backButtonImageStyle}></Image>
            </TouchableOpacity>
         </View>

        </View>
      </View>
    );
  }
}
