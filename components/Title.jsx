import { StyleSheet, Text } from "react-native";
import { COLORS } from "../contants/colors";

export default function Title({name, isBold}){
    return <Text style={[styles.title, isBold && styles.bold]}>{name}</Text>;
}
Title.defaultProps = {
    isBold: false
}
const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Poppins-regular',
        color: COLORS.primaryText,
        marginVertical: 15
    },
    bold:{
        fontFamily: 'Poppins-bold',
    }
})