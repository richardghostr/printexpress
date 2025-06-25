import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../contants/colors";

export default function InputDate({...props}){
    return <TouchableOpacity style={styles.input} {...props}>
            <Text style={styles.s}>{props.value}</Text>
            <MaterialCommunityIcons 
                name="calendar" 
                size={20} 
                color={COLORS.primaryText}/>
            </TouchableOpacity>;
}
const styles = StyleSheet.create({
    input:{
        height: 50,
        width: '100%',
        backgroundColor: COLORS.line,
        paddingLeft: 20,
        fontSize: 15,
        borderRadius: 5,
        textAlignVertical: 'center',
        color: COLORS.secondaryText,
        flexDirection: 'row',
        alignItems:'center'
    },
    s:{
        fontFamily: 'Poppins-regular',
        color: COLORS.secondaryText,
        flex: 0.93,
    }
})