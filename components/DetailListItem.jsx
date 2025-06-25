import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../contants/colors";
import Label from "./Label";

export default function DetailListItem({href,text, value, ...props}){
    return (
    <View style={styles.item}>
        <View style={styles.info}>
            <Label title={text} isBold={true}/>
            <Text style={styles.docName}>{value}</Text>
        </View>
        <TouchableOpacity {...props}>
            <Text style={styles.labelButton}>Téléverser</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    info:{
        flex: 1,
    },
    labelButton:{
        textAlignVertical: 'center',
        padding: 5,
        paddingHorizontal: 20,
        color: COLORS.primary,
        marginVertical: 'auto',
        fontSize: 14,
        fontFamily: 'Poppins-regular',
        backgroundColor: COLORS.secondary,
        borderRadius: 40,
        boxShadow: '0px 0px 8px 8px rgba(0,0,0,0.02)'
    },
    docName:{
        fontSize: 15,
        fontFamily: 'Poppins-regular',
        color: COLORS.primary
    }
})