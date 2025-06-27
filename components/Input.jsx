import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../contants/colors";

export default function Input({type, hint, ...props}){
    return (
    <TextInput 
        style={styles.input}
        placeholder={hint}
        placeholderTextColor={COLORS.secondaryText}
        keyboardType={type}
        {...props}
    />        
    );
}

const styles = StyleSheet.create({
    input:{
        height: 50,
        width: '100%',
        backgroundColor: COLORS.line,
        paddingLeft: 20,
        fontSize: 15,
        color: COLORS.primaryText,
        borderRadius: 5,
        fontFamily: 'Poppins-regular'
    }
})