import { Stack } from "expo-router"

export default function Layout(){
    return (
    <Stack initialRouteName="index" screenOptions={{headerShown: false}}>
        <Stack.Screen 
            name="index"
            options={{
                title: "Étape 1"
            }}/>
        <Stack.Screen 
            name="[stepID]" options={({route})=>({
            title: `Étape ${route.params.stepID}`
        })}/>
    </Stack>
    )
}