import { Image, StyleSheet, View } from "react-native";
import { COLORS } from "../contants/colors";

export default function ImageWrapper({src}){
    return (
        <View style={styles.logoWrapper}>
            <Image 
              source={src}
              style={styles.image}
              cachePolicy="memory-disk"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    logoWrapper:{
        backgroundColor: COLORS.secondary,
        overflow: 'hidden',
        height: 200,
        width: '100%',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 'auto'
    },
    image:{
        height: '100%',
        width: '100%'
    }
})