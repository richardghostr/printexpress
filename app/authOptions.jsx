import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Container from "../components/Container";
import { COLORS } from "../contants/colors";
export default function AuthOption(){
    const router = useRouter();
    return (
      <Container color={COLORS.backgroundPrimary}>
          <View style={[styles.bubble, {height: 200, width: 200, borderRadius: 200, backgroundColor: COLORS.secondary, top: '-100', left: '-50'}]}></View>
          <View style={styles.logoWrapper}>
              <Image 
                source={require("@/assets/images/printExpress_logo.png")}
                style={styles.image}
              />
              <View style={styles.bubble}></View>
              <View style={[styles.bubble, {right: '-15', height: 150, width: 150, borderRadius: 150, top: '100%', transform: 'translateY(-100%)'}]}></View>
          </View>
          <View style={[styles.bubble, {height: 400, width: 400, borderRadius: 400, backgroundColor: COLORS.secondary, top: '100%', left: '-50%', transform: 'translateY(-200px)'}]}></View>
          
          <Button name={"Connectez-vous"} bgcolor={COLORS.primary} height={50}  onPress = {() => router.navigate('/login')}/>
          <Button name={"Créer un compte"} bgcolor={COLORS.backgroundWhite} height={50} top={15} onPress = {() => router.navigate('/register')}/>
      </Container>
    );
}

const styles = StyleSheet.create({
  logoWrapper:{
    backgroundColor: COLORS.secondary,
    width: '100%',
    height: 'auto',
    position: 'relative',
    marginHorizontal: 'auto',
    marginBottom: '90',
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0px 0px 8px 8px rgba(0,0,0,0.025)',
    zIndex: 999
  },
  image: {
    width: '100%',
    height: 350,
  },
  button:{
    marginVertical: 10,
    backgroundColor: COLORS.primary,
    height: 60,
    width: '90%',
    borderRadius: 50,
    marginHorizontal: 'auto',
  },
  buttonLabel:{
    color: COLORS.backgroundWhite,
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-regular',
    fontSize: 16
  },
  bubble:{
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    top: '-30'
  }
})