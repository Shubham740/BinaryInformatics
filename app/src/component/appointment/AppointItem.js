import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Line from '../Line/Line';
import styles from './AppointmentItemStyles';
import IMAGES from '../../../res/images/';
import STRINGS from '../../utils/String';
import {getDate, getPatientName} from '../../utils/Utils';
import COLORS from '../../../res/colors/Colors';
const AppointItem = (props) => {
  let appointmentItem = props.appointmentItem;

  return (
    <View>
      <Line />
      <View style={styles.parentView}>
        <Text style={styles.dateTextStyle}>{getDate(props.date)}</Text>

        <View
          style={[
            styles.appointmentViewStyle,
            {
              borderColor:
                appointmentItem.appointment != null
                  ? COLORS.GREY
                  : COLORS.THEME_COLOR,
            },
          ]}>
          <Text
            style={[
              styles.nameTextStyle,
              {
                color:
                  appointmentItem.appointment != null
                    ? COLORS.BLACK
                    : COLORS.THEME_COLOR,
              },
            ]}>
            {appointmentItem.appointment != null
              ? getPatientName(appointmentItem.appointment.patient)
              : STRINGS.BOOK_APPOINTMENT}
          </Text>
          {appointmentItem.appointment != null && (
            <View style={styles.joinDeleteViewStyle}>
              <TouchableOpacity
                onPress={()=>{
                  if(props.appointItemCallback!=null && props.appointItemCallback!=undefined){
                    props.appointItemCallback()
                  }
                }}
              >
                <Image
                  style={styles.joinViewImageStyle}
                  resizeMode={'contain'}
                  source={IMAGES.JOIN}
                  ></Image>
              </TouchableOpacity>

              <TouchableOpacity
               onPress={()=>{
                if(props.appointItemCallback!=null && props.appointItemCallback!=undefined){
                  props.appointItemCallback()
                }
              }}
              >
                <Image
                  style={styles.joinViewImageStyle}
                  resizeMode={'contain'}
                  source={IMAGES.VIRTUAL_SELECTED}></Image>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {appointmentItem.appointment != null && (
          <View style={styles.joinDeleteViewStyle}>
            <TouchableOpacity
              onPress={()=>{
                if(props.appointItemCallback!=null && props.appointItemCallback!=undefined){
                  props.appointItemCallback()
                }
              }}
            >
              <Image
                style={styles.writeDeleteImageStyle}
                source={IMAGES.WRITE}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                if(props.appointItemCallback!=null && props.appointItemCallback!=undefined){
                  props.appointItemCallback()
                }
              }}
            >
              <Image
                style={styles.writeDeleteImageStyle}
                source={IMAGES.DELETE}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default AppointItem;
