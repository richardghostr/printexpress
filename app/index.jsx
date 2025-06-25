import Button from '@/components/Button';
import { COLORS } from '@/contants/colors';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
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
        <Button name={"Commençer"} bgcolor={COLORS.primary} width={"90%"} height={60} vertical={70} onPress = {() => router.navigate('/onboarding')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
  logoWrapper:{
    backgroundColor: COLORS.secondary,
    width: '80%',
    height: 'auto',
    position: 'relative',
    marginHorizontal: 'auto',
    marginVertical: 'auto',
    borderRadius: 20,
    overflow: 'hidden',
    boxShadow: '0px 0px 8px 8px rgba(0,0,0,0.01)'
  },
  image: {
    width: '100%',
    height: 350,
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