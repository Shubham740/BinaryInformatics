import {StyleSheet} from 'react-native'
import { getHeightScale } from '../../utils/Utils'

const styles=StyleSheet.create({
    imageViewStyle:{
        width: getHeightScale(50),
        height:getHeightScale(50),
    }
})

export default styles;