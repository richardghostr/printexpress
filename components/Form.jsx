import { StyleSheet, View } from "react-native";

export default function Form({children}){
    return (
        <View style={styles.form}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        marginTop: 10,
        gap: 10,
        width: '100%',
    },
});