import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text,BackHandler} from 'react-native';
import styles from './HeaderStyles';
import IMAGES from '../../../res/images';
import STRINGS from '../../utils/String';
import { getWidthScale } from '../../utils/Utils';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.parentViewStyle}>
        <View style={styles.titleViewStyle}>

          <View style={styles.calendarViewStyle}>
            <TouchableOpacity style={styles.touchableOpacityStyle}
            onPress={()=>{
              BackHandler.exitApp()
            }}
            >
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
        <TouchableOpacity
          style={styles.datePickerStyle}
          activeOpacity={0.9}
          >
            <Text
            style={styles.titleDropdownStyle}
            >{STRINGS.SELECTED_FACILITY}</Text>

          <Image
            style={[styles.backButtonImageStyle,{marginRight:getWidthScale(10)}]}
            resizeMode={'contain'}
            source={IMAGES.ARROW_DOWN}
           />


          </TouchableOpacity>
           

      </View>
    );
  }
}
