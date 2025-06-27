import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button";
import DetailListItem from "../../components/DetailListItem";
import ErrorMsg from "../../components/ErrorMsg";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Password from "../../components/Password";
import Title from "../../components/Title";
import { COLORS } from "../../contants/colors";
import { FormContext } from "../../context/FormContext";
import { step } from "../../utils/stepConfig";

const check = {
    city: (city) =>{
        city = city.trim();
        return (city.length >= 3)
    },
    institution: (institution)=>{
        institution = institution.trim();
        return (institution.length > 1)      
    },
    email: (email)=>{
        email = email.trim()
        return (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))         
    },
    tel: (tel)=>{
        tel = tel.trim();
        return (/^6\d{8}$/.test(tel))
    },
    password: (mdp)=>{
        mdp = mdp.trim()
        return (mdp.length > 4)        
    },
    confirmPassword: (cmdp, mdp)=>{
        return (cmdp === mdp)
    }
}
export default function RegisterStep(){
    const router = useRouter();
    const {formDatas, handleSetFormDatas} = useContext(FormContext);
    const {stepID} = useLocalSearchParams();
    const currentStep = step.find((el)=> el.id === parseInt(stepID));
    const idArray = step.map((el)=> el.id);
    const insets = useSafeAreaInsets();
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <SafeAreaView style={{padding: 20, paddingBottom: insets.bottom}}>
            {
                currentStep ? 
                (
                <View style={{height: '100%'}}>
                    <Step id={currentStep.id} title={currentStep.title} child={currentStep} isDisabled={isDisabled} setIsDisabled={setIsDisabled} formDatas={formDatas} handleSetFormDatas={handleSetFormDatas}/>
                    <View style={styles.buttonContainer}>
                    {idArray.includes(parseInt(currentStep.id) - 1) || parseInt(currentStep.id) === 2 ?
                    <Button 
                        name={"Retour"} 
                        bgcolor={COLORS.backgroundWhite} 
                        width={/*(idArray.includes(parseInt(currentStep.id) + 1) && parseInt(currentStep.id) === 2) ?*/ '45%'}
                        onPress={()=> {
                            if(parseInt(currentStep.id) === 2){
                                router.replace('/register')
                            }else{
                                router.replace(`/register/${currentStep.id - 1}`);
                            }
                        }} /> : null}
                    {
                    idArray.includes(currentStep.id + 1) ?
                    <Button 
                        name={"Suivant"} 
                        width={/*idArray.includes(currentStep.id - 1) ?*/'45%'}
                        bgcolor={isDisabled ? COLORS.btnDisabled : COLORS.primary} 
                        horizontal={0}
                        disabled = {isDisabled}
                        onPress={()=> {
                            router.replace(`/register/${currentStep.id + 1}`);
                        }}/>: 
                    <Button 
                        name={"Terminer"} 
                        bgcolor={isDisabled ? COLORS.btnDisabled : COLORS.primary} 
                        width={/*idArray.includes(currentStep.id - 1) ?*/'45%'}
                        horizontal={0}
                        onPress={()=> {
                            router.replace(`/register/${currentStep.id + 1}`);
                        }}/>
                    }
                    </View>                
                </View>
            ) : 
                ''
            }
        </SafeAreaView>
    );
}

function Step({id, title, child, setIsDisabled, formDatas, handleSetFormDatas}){
    const [isPasswordSecured, setIsPasswordSecured] = useState(true);
    const [isPasswordConfirmSecured, setIsPasswordConfirmSecured] = useState(true);
    const [photoVal, setPhotoVal] = useState('Aucune photo sélèctionnée');
    const isDataOk = () =>{
        if(parseInt(id) === 2)
            return !(check.city(formDatas.city) && check.institution(formDatas.institution));

        if(parseInt(id) === 3)
            return !(check.city(formDatas.email) && check.tel(formDatas.tel));

        if(parseInt(id) === 4)
            return !(check.password(formDatas.password) && check.confirmPassword(formDatas.confirmPassword, formDatas.password))

        // return true
    }
    useEffect(()=>{
        setIsDisabled(isDataOk())
    }, [formDatas])
    const PickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })
        if(!result.canceled){
            let arr = result.assets[0].uri.split('/');
            setPhotoVal(arr[arr.length-1]);
        }
    };
    return (
        <View>
            <Title name={title} isBold={true}/>
            <Form>
                {(id !== 5 && id !== 4) && child.fields.map((field) => {
                    return ( 
                        <View key={field.id+""+field.type}>
                            <Label title={field.hint}/>
                            <Input
                                type={field.type} 
                                defaultValue={formDatas[field.type === 'ville' ? 'city' : field.type]}
                                placeholder={field.hint} 
                                onChangeText = {(val) => {
                                    handleSetFormDatas(field.type === 'ville' ? 'city' : field.type, val);
                                    setIsDisabled(isDataOk());
                                }}
                            />
                            {!check[field.type === 'ville' ? 'city' : field.type](formDatas[field.type === 'ville' ? 'city' : field.type]) && <ErrorMsg>Le champ {field.type} est obligatoire.</ErrorMsg>}
                        </View>
                    );
                })}
                {
                    id === 4 && 
                    <>
                    <Label title="Mot de passe"/>
                    <Password 
                        isPasswordSecured={isPasswordSecured} 
                        setIsPasswordSecured={setIsPasswordSecured} 
                        placeholder="Mot de passe"
                        defaultValue={formDatas.password}
                        onChangeText = {(val) =>{ 
                            handleSetFormDatas('password',val)
                        }}/>
                        {!check['password'] && <Text>Le champ Mot de passe n&apos;st pas correctement rempli.</Text>}

                    <Label title="Confirmer votre mot de passe"/>
                    <Password 
                        isPasswordSecured={isPasswordConfirmSecured} 
                        setIsPasswordSecured={setIsPasswordConfirmSecured} 
                        placeholder="Confirmer votre mot de passe"
                        defaultValue={formDatas.confirmPassword}
                        onChangeText = {(val) => handleSetFormDatas('confirmPassword',val)}/>     
                        {!check['confirmPassword'] && <Text>Le champ confirmé mot de passe n&apos;st pas correctement rempli.</Text>}

                    </>
                }                
                {
                    id === 5 && 
                    <>
                        <DetailListItem text={"CNI ou récépissé (PDF)"} value={"Aucun document"}/>
                        <DetailListItem text={"Photo d'identification (images)"} value={photoVal} onPress = {PickImage}/>
                    </>
                }
            </Form>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // position: 'absolute',
        // bottom: 50
        marginTop: 'auto',
        marginBottom: 40
    },
});