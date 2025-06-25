import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../contants/colors';

export default function Loader(){
    return (
        <View style={{flex: 1,  alignItems: 'center', 'justifyContent': 'center'}}>
            <ActivityIndicator color={COLORS.primary} size={50}/>
        </View>
    );
}