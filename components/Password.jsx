import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../contants/colors";
export default function Password({isPasswordSecured, setIsPasswordSecured, ...props}){
    return (
        <View style={styles.passwordField}>
            <TextInput 
                style={[styles.input, styles.inputMdp]}
                placeholder="Mot de passe"
                placeholderTextColor={COLORS.secondaryText}
                secureTextEntry={isPasswordSecured}
                {...props}
            />
            <TouchableOpacity
                onPress={()=> setIsPasswordSecured(isPasswordSecured ? false : true)}
                style={styles.showBtn}
            >
                <Ionicons name={isPasswordSecured ? "eye-outline" : "eye-off-outline"} size={20}/>
            </TouchableOpacity>
        </View>        
    );
}
const styles = StyleSheet.create({
    input:{
        height: 50,
        width: '100%',
        backgroundColor: COLORS.line,
        paddingLeft: 20,
        color: COLORS.primaryText,
        fontSize: 15,
        borderRadius: 5,
        fontFamily: 'Poppins-regular'
    },
    passwordField: {
        backgroundColor: "blue",
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        position: 'relative',
        borderRadius: 5,
        overflow: 'hidden'
    },
    inputMdp:{
        flex: 1,
        marginTop: 0,
        borderRadius: 0
    },
    showBtn:{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        position: 'absolute',
        right: 0
    }
})