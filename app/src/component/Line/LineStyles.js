import {StyleSheet} from 'react-native'
import COLORS from '../../../res/colors/Colors'
import { getHeightScale } from '../../utils/Utils'

const styles=StyleSheet.create({
    parentView:{
        width:'100%',
        height:getHeightScale(1),
        backgroundColor:COLORS.GREY
    }
})

export default styles;