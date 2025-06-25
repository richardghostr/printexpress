import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../../components/Button";
import Container from "../../components/Container";
import DetailListItem from "../../components/DetailListItem";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Password from "../../components/Password";
import Title from "../../components/Title";
import { COLORS } from "../../contants/colors";
import { FormContext } from "../../context/FormContext";
import { step } from "../../utils/stepConfig";

export default function RegisterStep(){
    const router = useRouter();
    const {stepID} = useLocalSearchParams();
    const currentStep = step.find((el)=> el.id === parseInt(stepID));
    const idArray = step.map((el)=> el.id);

    return (
        <Container>
            {
                currentStep ? 
                (
                <>
                    <Step id={currentStep.id} title={currentStep.title} child={currentStep} />
                    <View style={styles.buttonContainer}>
                    {idArray.includes(parseInt(currentStep.id) - 1)?
                    <Button 
                        name={"Retour"} 
                        bgcolor={COLORS.backgroundWhite} 
                        width={idArray.includes(parseInt(currentStep.id) + 1)?'45%':'100%'}
                        onPress={()=> {
                            router.replace(`/register/${currentStep.id - 1}`);
                        }} /> : null}
                    {idArray.includes(currentStep.id + 1) ?
                    <Button 
                        name={"Suivant"} 
                        bgcolor={COLORS.primary} 
                        width={idArray.includes(currentStep.id - 1)?'45%':'100%'}
                        horizontal={0}
                        onPress={()=> {
                            router.replace(`/register/${currentStep.id + 1}`);
                        }}/> : null}
                    </View>                
                </>
            ) : 
                ''
            }
        </Container>
    );
}

function Step({id, title, child}){
    const {formDatas, handleSetFormDatas} = useContext(FormContext);
    const [isPasswordSecured, setIsPasswordSecured] = useState(true);
    const [isPasswordConfirmSecured, setIsPasswordConfirmSecured] = useState(true);
    const [photoVal, setPhotoVal] = useState('Aucune photo sélèctionnée');

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
                        <Input
                            key={field.id+""+field.type} 
                            type={field.type} 
                            defaultValue={formDatas[field.type]}
                            placeholder={field.hint} 
                            onChangeText = {(val) => handleSetFormDatas(field.type === 'ville' ? 'city' : field.type, val)}

                        />
                    );
                })}
                {
                    id === 5 && 
                    <>
                        <DetailListItem text={"CNI ou récépissé (PDF)"} value={"Aucun document"}/>
                        <DetailListItem text={"Photo d'identification (images)"} value={photoVal} onPress = {PickImage}/>
                    </>
                }
                {
                    id === 4 && 
                    <>
                    <Password 
                        isPasswordSecured={isPasswordSecured} 
                        setIsPasswordSecured={setIsPasswordSecured} 
                        placeholder="Mot de passe"
                        defaultValue={formDatas.password}
                        onChangeText = {(val) => handleSetFormDatas('password',val)}/>
                    <Password 
                        isPasswordSecured={isPasswordConfirmSecured} 
                        setIsPasswordSecured={setIsPasswordConfirmSecured} 
                        placeholder="Confirmer votre mot de passe"
                        defaultValue={formDatas.confirmPassword}
                        onChangeText = {(val) => handleSetFormDatas('confirmPassword',val)}/>                                            
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
        marginTop: 50,
    },
});