import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import Container from "../../components/Container";
import Form from "../../components/Form";
// import ImageWrapper from "../../components/ImageWrapper";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputDate from "../../components/InputDate";
import Label from "../../components/Label";
import LinkButton from "../../components/LinkButton";
import Title from "../../components/Title";
import { COLORS } from "../../contants/colors";
import { FormContext } from "../../context/FormContext";


export default function Register(){
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const maxYear = (new Date()).getFullYear() - 15;
    const {formDatas, handleSetFormDatas} = useContext(FormContext);
    const [birthDate, setBirthDate] = useState(new Date(maxYear, 0, 1));
    const [maxDate, setMaxDate] = useState(new Date(maxYear, 0, 1));

    const sgetMonth = (month) => {
        month = parseInt(month)
        month = month+1;
        return (month % 10 === month) ? '0'+month : month 
    }
    const [formattedDate, setFormattedDate] = useState(`${new Date(birthDate.toString()).getDate()}/ ${sgetMonth(new Date(birthDate.toString()).getMonth())}/ ${new Date(birthDate.toString()).getFullYear()}`);

    const router = useRouter();
    useEffect(()=>{
    console.log(formDatas);

    }, [formDatas])
    useEffect(()=> {
        const sgetMonth = (month) => {
            month = parseInt(month)
            month = month+1;
            return (month % 10 === month) ? '0'+month : month 
        }
        setFormattedDate(`${sgetMonth(new Date(birthDate.toString()).getDate()-1)}/ ${sgetMonth(new Date(birthDate.toString()).getMonth())}/ ${new Date(birthDate.toString()).getFullYear()}`)
        handleSetFormDatas('birthdate',`${sgetMonth(new Date(birthDate.toString()).getDate()-1)}/ ${sgetMonth(new Date(birthDate.toString()).getMonth())}/ ${new Date(birthDate.toString()).getFullYear()}`)
    }, [birthDate])
    // useEffect(()=> {
    //     handleSetFormDatas('birthdate', formattedDate)
    // }, [])
    return (
        <Container color={COLORS.backgroundPrimary}>
            {/* <ImageWrapper src={require("../../assets/images/register_image.jpg")}/> */}
            <Title name="Informations personnelles" isBold={true}/>
            <Form>
                <Label title="Nom"/>
                <Input type={"text"} hint={"Nom"} defaultValue={formDatas.lastname} onChangeText={(val) => handleSetFormDatas('lastname', val)}/>
                <Label title="Prénom"/>
                <Input type={"text"} hint={"Prénom"} defaultValue={formDatas.firstname} onChangeText={(val) => handleSetFormDatas('firstname', val)}/>
                <Label title="Lieu de naissance"/>
                <Input 
                    type={"text"} 
                    hint={"Lieu de naissance (ville)"}
                    onChangeText={(val) => handleSetFormDatas('birthplace', val)}
                />
                <Label title="Date de naissance (JJ/MM/AAAA)"/>
                <InputDate 
                    value={`${formattedDate}`} 
                    onPress = {()=> {
                        setIsPickerVisible(true)
                    }}/>

                {isPickerVisible &&
                <DateTimePicker 
                    mode="date" 
                    disabled
                    maximumDate={maxDate}
                    value={birthDate}
                    onChange={(event, selectedDate)=>{
                        try{
                            if(event.type === "dismissed"){
                                setBirthDate(maxDate)
                            }

                            if(event.type === "set"){
                                setBirthDate(selectedDate)
                            }else{
                                // setIsPickerVisible(false)
                                setBirthDate(birthDate)
                            }
                            setIsPickerVisible(false)
                        }catch(e){
                            Alert.alert('Une erreur est survenue', 'Une erreur est survenue lors de la mise à jour de la date de naissance.');
                            console.error(e)
                        }
                    }}
                />}
                <LinkButton  
                    name={"Suivant"} 
                    href={{
                        pathname: '/register/[stepID]',
                        params: {stepID: 2}
                    }}
                    bgcolor={COLORS.primary}
                    top={15}
                    vertical={15}
                    />
                <Button name={"on"} bgcolor={COLORS.primary} onPress={()=> console.log(formDatas)}/>
            </Form>
        </Container>
    );
}
const styles = StyleSheet.create({

})