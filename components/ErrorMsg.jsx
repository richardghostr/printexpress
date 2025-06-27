import { Text } from "react-native";

export default function ErrorMsg({children}){
    return (<Text style={{color: 'red', fontFamily: 'Poppins-regular'}}>{children}</Text>)
}