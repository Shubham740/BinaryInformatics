import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './BinaryInfoButtonStyles';

const BinaryInfoButton = (props) => {
  return (
    <TouchableOpacity style={[styles.parentView, {...props.containerButton}]}
        onPress={()=>{
          if(props.callback!=null && props.callback!=undefined){
              props.callback()
          }
        }}
    >
      <Text
      style={styles.labelStyle}
      >{props.label}</Text>
    </TouchableOpacity>
  );
};
export default BinaryInfoButton;
