import {StyleSheet} from 'react-native'
import { getHeightScale } from '../../utils/Utils'

const styles=StyleSheet.create({
    imageViewStyle:{
        width: getHeightScale(40),
        height:getHeightScale(40),
        alignSelf:'center'
    }
})

export default styles;