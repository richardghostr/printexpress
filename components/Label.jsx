import { StyleSheet, Text } from "react-native"
import { COLORS } from "../contants/colors"

export default function Label({title, isBold}){
    return <Text style={[styles.label, {fontFamily: isBold ? 'Poppins-bold' : 'Poppins-regular'}]}>{title}</Text>
}
Label.defaultProps = {
    title: '',
    isBold: false
}
const styles = StyleSheet.create({
    label:{
        fontFamily: 'Poppins-regular',
        marginHorizontal: 3,
        fontSize: 15,
        color: COLORS.primaryText
    }
})