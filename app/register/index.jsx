import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import Container from "../../components/Container";
import ErrorMsg from "../../components/ErrorMsg";
import Form from "../../components/Form";
// import ImageWrapper from "../../components/ImageWrapper";
// import Button from "../../components/Button";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputDate from "../../components/InputDate";
import Label from "../../components/Label";
import Title from "../../components/Title";
import { COLORS } from "../../contants/colors";
import { FormContext } from "../../context/FormContext";

const sgetMonth = (month) => {
    month = parseInt(month)
    month = month+1;
    return (month % 10 === month) ? '0'+month : month 
}

const check = {
    lastname: (lastname) =>{
        lastname = lastname.trim();
        if(lastname.length >= 3){
            return true;
        }
        return false
    },
    firstname: (firstname)=>{
        firstname = firstname.trim();
        if(firstname.length >= 3){
            return true;
        }
        return false        
    },
    birthplace: (birthplace)=>{
        birthplace = birthplace.trim()
        if(birthplace.length >= 2){
            return true;
        }
        return false          
    },
    birthdate: (birthdate)=>{
        birthdate = birthdate.trim();
        if(birthdate.trim() !== ''){
            return true
        }
        return false
    }
}

export default function Register(){
    const router = useRouter();
    const [isPickerVisible, setIsPickerVisible] = useState(false);
    const maxYear = (new Date()).getFullYear() - 15;
    const {formDatas, handleSetFormDatas} = useContext(FormContext);
    const [birthDate, setBirthDate] = useState(new Date(maxYear, 0, 1));
    const [maxDate, setMaxDate] = useState(new Date(maxYear, 0, 1));
    const [isDisabled, setIsDisabled] = useState(true);
    const [formattedDate, setFormattedDate] = useState(`${new Date(birthDate.toString()).getDate()}/${sgetMonth(new Date(birthDate.toString()).getMonth())}/${new Date(birthDate.toString()).getFullYear()}`);
    const isDataOk = () =>{
        return !(check.lastname(formDatas.lastname) && check.firstname(formDatas.firstname) && check.birthplace(formDatas.birthplace) && check.birthdate(formDatas.birthdate));
    }
    useEffect(()=>{
        if(formDatas.birthdate){
            setBirthDate(new Date(formDatas.birthdate.split('/').reverse().join('-')));
        }
        setIsDisabled(isDataOk)
    }, [])

    useEffect(()=> {
        const sgetMonth = (month) => {
            month = parseInt(month)
            month = month+1;
            return (month % 10 === month) ? '0'+month : month 
        }
        setFormattedDate(`${sgetMonth(new Date(birthDate.toString()).getDate()-1)}/${sgetMonth(new Date(birthDate.toString()).getMonth())}/${new Date(birthDate.toString()).getFullYear()}`)
        handleSetFormDatas('birthdate',`${sgetMonth(new Date(birthDate.toString()).getDate()-1)}/${sgetMonth(new Date(birthDate.toString()).getMonth())}/${new Date(birthDate.toString()).getFullYear()}`)
    }, [birthDate])

    return (
        <Container color={COLORS.backgroundPrimary}>
            {/* <ImageWrapper src={require("../../assets/images/register_image.jpg")}/> */}
            <Title name="Informations personnelles" isBold={true}/>
            <Form>
                <Label title="Nom"/>
                <Input 
                    type={"text"} 
                    hint={"Nom"} 
                    defaultValue={formDatas.lastname} 
                    onChangeText={
                        (val) => {
                            handleSetFormDatas('lastname', val)
                            setIsDisabled(isDataOk())
                        }
                    }/>
                    {!check['lastname'](formDatas.lastname) && <ErrorMsg>Le champ nom est obligatoire.</ErrorMsg>}
                    
                <Label title="Prénom"/>
                <Input 
                    type={"text"} 
                    hint={"Prénom"} 
                    defaultValue={formDatas.firstname} 
                    onChangeText={
                        (val) => {
                            handleSetFormDatas('firstname', val)
                            setIsDisabled(isDataOk())
                        }
                    }/>
                    {!check['firstname'](formDatas.firstname) && <ErrorMsg>Le champ prénom &apos;st obligatoire.</ErrorMsg>}

                <Label title="Lieu de naissance"/>
                <Input 
                    type={"text"} 
                    hint={"Lieu de naissance (ville)"}
                    defaultValue = {formDatas.birthplace}
                    onChangeText={
                        (val) => {
                            handleSetFormDatas('birthplace', val)
                            setIsDisabled(isDataOk())
                        }
                    }
                />
                {!check['birthplace'](formDatas.birthplace) && <ErrorMsg>Le champ lieu de naissance est obligatoire.</ErrorMsg>}
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
                                setBirthDate(birthDate)
                            }
                            setIsPickerVisible(false)
                        }catch(e){
                            Alert.alert('Une erreur est survenue', 'Une erreur est survenue lors de la mise à jour de la date de naissance.');
                            console.error(e)
                        }
                        setIsDisabled(isDataOk())
                    }}
                />}
                {!check['birthdate'](formDatas.birthdate) && <ErrorMsg>Le champ date de naissance n&apos;st pas correctement rempli.</ErrorMsg>}
                <Button 
                    disabled={isDisabled} 
                    name={"Suivant"} 
                    // href={{
                    //     pathname: '/register/[stepID]',
                    //     params: {stepID: 2}
                    // }}
                    bgcolor={isDisabled ? COLORS.btnDisabled:COLORS.primary}
                    top={15}
                    vertical={15}
                    onPress = {()=>{
                        // if(){
                            // console.log("ok")
                        // }
                        console.log(formDatas)
                        router.navigate("/register/2")
                        // if(formDatas.lastname.trim() !== '' && formDatas.firstname.trim() !== '' && formDatas.lastname.trim() )
                    }}
                    />
                {/* <Button name={"on"} bgcolor={COLORS.primary} onPress={()=> console.log(formDatas)}/> */}
            </Form>
        </Container>
    );
}
const styles = StyleSheet.create({

})