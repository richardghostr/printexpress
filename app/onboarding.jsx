import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import CustomLink from "../components/CustomLink";
import { COLORS } from '../contants/colors';

const Next = ({...props}) => {
    return <TouchableOpacity style={styles.button} {...props}><Text style={styles.buttonLabel}>Suivant</Text></TouchableOpacity>
}

const Done = ({...props}) => {
    const router = useRouter();

    return <TouchableOpacity 
            style={styles.button} 
            {...props}
            onPress={() => router.navigate('/authOptions')}>
                <Text style={styles.buttonLabel}>Continuer</Text>
            </TouchableOpacity>
}

const Skip = ({...props}) => {
    const router = useRouter();

    return <TouchableOpacity 
            style={[styles.button, {backgroundColor: COLORS.secondary}]} 
            {...props}
            onPress={()=> router.navigate('/authOptions')}
            >
                <Text style={[styles.buttonLabel, {color: COLORS.primaryText}]}>Continuer</Text>
            </TouchableOpacity>    
}

const Dot = ({selected}) => {
    return <View style={[styles.dot, {backgroundColor: `${selected ? COLORS.primary : COLORS.border}`}]}></View>
}

const ImageWrapper = ({icon}) => {
    return (
        <View style={styles.wrapper}>
            <Image source={icon} style={styles.wrappedImg}/>
        </View>
    );
}
export default function OnboardingScreen(){
    return (
        <View
            style={{flex: 1, backgroundColor: COLORS.backgroundWhite}}
        >
        <CustomLink href="/authOptions" noLine={false} position="flex-end" horizontal={25} top={25}>Passer</CustomLink>
        <Onboarding 
            titleStyles={{color: COLORS.primaryText, fontFamily: 'Poppins-bold', paddingHorizontal: 2, fontSize: 22}}
            subTitleStyles={{color: COLORS.primaryText, paddingHorizontal: 15, fontFamily: 'Poppins-regular'}}
            containerStyles={{backgroundColor: COLORS.backgroundWhite, justifyContent: 'flex-start', paddingTop: 80}}
            bottomBarColor={COLORS.backgroundWhite}
            bottomBarHeight={95}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent = {Done}
            DotComponent={Dot}
            imageContainerStyles={{paddingBottom: 40}}
            pages = {[
                {
                    image: (<ImageWrapper icon={require("../assets/images/rapide.jpg")}/>),
                    title: "Gagnez du temps avec des commandes d'impression rapides",
                    subtitle: "Commandez des impressions où que vous soyez et évitez l'attente à l'imprimerie. Préparez vos documents plus rapidement que jamais"
                },
                {
                    title: "Commandez des impressions à tout moment, n'importe où",
                    image: <ImageWrapper icon={require("../assets/images/command_anywhere.jpg")}/>,
                    subtitle: "Avec PRINTEXPRESS, commandez vos impressions depuis votre téléphone ou votre tablette, où que vous soyez. Plus besoin de vous déplacer en magasin ni d'utiliser un ordinateur."
                }, 
                {
                    title: "Faites livrer vos impressions",
                    image: <ImageWrapper icon={require("../assets/images/delivered_at_home.jpg")}/>,
                    subtitle: "Recevez vos documents à l’endroit de votre choix, ce qui vous fait gagner du temps et des efforts."
                },
                {
                    title: "Paiments via l'application",
                    image: <ImageWrapper icon={require("../assets/images/paiement_mobile.jpg")}/>,
                    subtitle: "Personnalisez chaque détail de vos impressions, du format du papier à la reliure, en vous assurant que vos documents sont parfaitement adaptés à vos besoins."
                },
                {
                    title: "Restez à jour",
                    image: <ImageWrapper icon={require("../assets/images/keep_in_touch.jpg")}/>,
                    subtitle: "Recevez des notifications en temps réel sur vos commandes d'impression, du traitement à la livraison, vous assurant ainsi d'être toujours au courant"
                },
                {
                    title: "Personnalisez vos impressions",
                    image: <ImageWrapper icon={require("../assets/images/customize_your_prints.jpg")}/>,
                    subtitle: "Personnalisez chaque détail de vos impressions, du format du papier à la reliure, en vous assurant que vos documents sont parfaitement adaptés à vos besoins."
                }
            ]}
        />
        </View>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: COLORS.primary,
        padding: 12,
        marginHorizontal: 10,
        paddingHorizontal: 25,
        borderRadius: 40,
        marginRight: 20

    },
    buttonLabel:{
        fontFamily: 'Poppins-regular',
        fontSize: 15,
        color: 'white'
    },
    dot:{
        height: 8,
        width: 8,
        backgroundColor: COLORS.border,
        marginHorizontal: 2,
        marginBottom: 70,
        borderRadius: 20
    },
    wrapper:{
        backgroundColor: COLORS.secondary,
        overflow: 'hidden',
        height: 250,
        width: '90%',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0
    },
    wrappedImg: {
        width: '100%',
        height: '100%'
    },
    link:{
        fontSize: 15,
        color: COLORS.primary,
        textDecorationColor: COLORS.primary,
        textDecorationLine: 'underline'
    }
})