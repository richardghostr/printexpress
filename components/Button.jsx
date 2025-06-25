import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../contants/colors";

export default function Button({name, bgcolor, width, height, top, icon, vertical, horizontal, ...props}){
    return (
    <TouchableOpacity
        style={[
            styles.button, 
            {
                backgroundColor: bgcolor, 
                marginVertical: vertical ? vertical : 0,
                marginTop: top | 0,
                height: height | 50,
                width: width ? width : '100%',
                borderRadius: height | 50,
                marginHorizontal: horizontal ? horizontal : 'auto',
            }
        ]} {...props}>
        <Text style={[styles.buttonLabel, {color: (bgcolor === COLORS.backgroundPrimary) || (bgcolor === COLORS.backgroundWhite) ? COLORS.primaryText : COLORS.backgroundWhite}]}>
            {icon !== '' && 
            <MaterialCommunityIcons 
                name={icon} 
                size={24} 
                color={
                    (bgcolor === COLORS.backgroundPrimary) || (bgcolor === COLORS.backgroundPrimary) ? COLORS.primaryText : COLORS.backgroundWhite
                }/>}
            {name}
        </Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        width: '100%',
        boxShadow: '0px 0px 16px 16px rgba(0,0,0,0.04)',
        borderRadius: 50,
        overflow: 'hidden'
    },
    buttonLabel:{
        textAlign: 'center',
        height: '100%',
        textAlignVertical: 'center',
        fontFamily: 'Poppins-regular',
        fontSize: 16
    }
})