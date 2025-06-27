import { useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../contants/colors';
export default function CustomLink({href, noLine, ...props}){
    const router = useRouter();

    return (<Text
            href={href} 
            onPress={()=> router.navigate(href)}
            style={[
                styles.link, 
                {
                    textDecorationLine: noLine ? 'none' : 'underline',
                    alignSelf: props.position ? props.position : 'flex-start',
                    marginVertical: props.top ? props.top : 20,
                    marginHorizontal: props.horizontal ? props.horizontal : 0
                }
            ]}>
                {props.children}
            </Text>)
    
}

CustomLink.defaultProps = {
    href: '',
    noLine: false,
    children: ''
}
const styles = StyleSheet.create({
    link:{
        fontSize: 15,
        color: COLORS.primary,
        textDecorationColor: COLORS.primary,
        textDecorationLine: 'underline',
        alignSelf: 'flex-end',
        fontFamily: 'Poppins-regular'
    }
})