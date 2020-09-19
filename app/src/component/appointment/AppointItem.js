import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import Line from '../Line/Line';
import styles from './AppointmentItemStyles';
import IMAGES from '../../../res/images/';
import STRINGS from '../../utils/String'
const AppointItem = (props) => {
  return (
    <View>
      <Line />
      <View style={styles.parentView}>
        <Text style={styles.dateTextStyle}>{'10:00 AM '}</Text>

        <View style={styles.appointmentViewStyle}>
          <Text
          style={styles.nameTextStyle}
          >
            {STRINGS.BOOK_APPOINTMENT}
          </Text>
          <Image
          style={styles.joinViewImageStyle}
          resizeMode={'contain'}
          source={IMAGES.JOIN}
          >

          </Image>
          <Image
          style={styles.joinViewImageStyle}
          resizeMode={'contain'}
          source={IMAGES.VIRTUAL_SELECTED}
          >

          </Image>

        </View>
       

        <TouchableOpacity>
        <Image style={styles.writeDeleteImageStyle} source={IMAGES.WRITE}
        resizeMode={'contain'}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Image style={styles.writeDeleteImageStyle} source={IMAGES.DELETE} 
        resizeMode={'contain'}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AppointItem;
