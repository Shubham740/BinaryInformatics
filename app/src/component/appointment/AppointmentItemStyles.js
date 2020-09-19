import {StyleSheet} from 'react-native'
import COLORS from '../../../res/colors/Colors';
import { fonts, getHeightScale, getWidthScale } from '../../utils/Utils';
const styles = StyleSheet.create({
        parentView:{
            height:getHeightScale(50),
            flexDirection:'row',
            alignItems:'center',
            marginHorizontal:getWidthScale(15)
        },
        dateTextStyle:{
        fontSize:getWidthScale(12),
        fontFamily:fonts.light,
        color:COLORS.LIGHT_GREY
        },
        appointmentViewStyle:{
            width:'65%',
            marginLeft:getWidthScale(5),
            alignItems:'center',
            borderWidth:getWidthScale(1),
            height:getHeightScale(35),
            alignSelf:'center',
            borderRadius:getWidthScale(5),
            flexDirection:'row',
            borderColor:COLORS.THEME_COLOR
        },
        writeDeleteImageStyle:{
            width:getHeightScale(20),
            height:getHeightScale(20),
            marginLeft:getWidthScale(10)
        },
        nameTextStyle:{
            paddingLeft:getWidthScale(10),
            fontSize:getWidthScale(10),
            fontFamily:fonts.bold,
            color:COLORS.THEME_COLOR
        },
        joinViewImageStyle:{
            width:getWidthScale(40),
            height:getHeightScale(30),
            alignSelf:'center',
            marginLeft:getWidthScale(10)
        },
        joinDeleteViewStyle:{flexDirection: 'row'}
})

export default styles;
