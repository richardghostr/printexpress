import { ScrollView, StyleSheet, View } from "react-native";

export default function Container({children, color}){
    return (
        <ScrollView style={{flex: 1, backgroundColor: color}}>
            <View style={[styles.container, {backgroundColor: color}]}>
                {children}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    }        
})