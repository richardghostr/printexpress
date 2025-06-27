import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import CustomLink from '../components/CustomLink';
import Form from '../components/Form';
import ImageWrapper from '../components/ImageWrapper';
import Input from '../components/Input';
import Label from '../components/Label';
import Password from '../components/Password';
import Title from '../components/Title';
import { COLORS } from '../contants/colors';

export default function Login(){
    const [isPasswordSecured, setIsPasswordSecured] = useState(true);
    const [email, setEmail] = useState('');
    const [mdp, setMdp] = useState('');

    return (
    <Container color={COLORS.backgroundPrimary}>
        <ImageWrapper src={require('../assets/images/login_image.jpg')}/>
        <Title name="Connectez-vous à votre compte." />
        <Form>
            <Label title={"Adresse e-mail ou nom d'utilisateur"}/>
            <Input 
                type={"email"} 
                hint={"Adresse e-mail ou nom d'utilisateur"}
                onChangeText={val => {
                    setEmail(val)
                    console.log(email)
                }}/>
            <Label title={"Mot de passe"}/>
            <Password 
                onChangeText={val => {
                    setMdp(val)
                    console.log(mdp)
                }}
                isPasswordSecured={isPasswordSecured}
                setIsPasswordSecured={setIsPasswordSecured}
            />
            <CustomLink href="/" noLine={false} position="flex-end" top={5}>Mot de passe oublier ?</CustomLink>
            <Button name={"Se connecter"}  bgcolor={COLORS.primary} onPress={()=> console.log("ok")}/>
            <Button name={"Continuer avec google"} icon="google" bgcolor={COLORS.backgroundPrimary} onPress={()=> console.log("ok")}/>
            <CustomLink href={"/register"} noLine={true} top={2}position="center">Je n&apos;ai pas de compte ? S&apos;inscrire</CustomLink>
        </Form>          
    </Container>
    );
}
const styles = StyleSheet.create({

});
