import React from 'react';
import {Image} from 'react-native';
import styles from './BottomArrowStyles'


const BottomArrow=(props)=>{
    return(<Image
    style={styles.imageViewStyle}
    source={props.image}
    
    ></Image>)
}

export default BottomArrow;
