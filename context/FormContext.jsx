import { createContext, useState } from "react";

const formData = {
    lastname:'',
    firstname:'',
    birthplace:'',
    birthdate: '',
    city: '',
    institution: '', 
    email:'',
    tel: '',
    password: '',
    confirmPassword: '',
    cni: '',
    photo: ''
}
export const FormContext = createContext(formData);

export const FormContextProvider = ({children}) => {
    const [formDatas, setFormDatas] = useState(formData);
    const handleSetFormDatas = (fieldName, value) => {
        setFormDatas({
            ...formDatas,
            [fieldName] : value
        })
    }
    return (
        <FormContext.Provider value={{formDatas, handleSetFormDatas}}>
            {children}
        </FormContext.Provider>
    );
}