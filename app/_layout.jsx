import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from 'react';
import Loader from '../components/Loader';
import { COLORS } from '../contants/colors';
import { FormContextProvider } from '../context/FormContext';
export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-regular': require("../assets/fonts/Poppins-Regular.ttf"),
    'Poppins-bold' : require("../assets/fonts/Poppins-Bold.ttf")
  })
  useEffect(() => {
    if(error){
      return null
    }
  }, [error]);

  return (
    <FormContextProvider>
    {loaded ? (
    <Stack 
      initialRouteName="index"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.backgroundPrimary
        },
      }}>
        <Stack.Screen 
          name="index"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="onboarding"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="authOptions"
          options={{
            title: '',
            headerShown: true,
            headerTintColor: COLORS.primary,
            // headerLeft: ()=> <TouchableOpacity onPress={()=> router.back()}><Ionicons name="chevron-back" size={28} color={COLORS.primaryText}/></TouchableOpacity>,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-regular'
            }
          }}
        />
        <Stack.Screen 
        name="login"
        options={{
          title: 'Connexion',
          headerShown: true,
          headerTintColor: COLORS.primary,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-regular',
            fontWeight: 100
          }
        }}
      />
      <Stack.Screen 
        name="register"
        options={{
          title: 'Création de compte',
          headerShown: true,
          headerTintColor: COLORS.primary,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 100,
            fontFamily: 'Poppins-regular'
          }
        }}
      />
      </Stack>      
    ): <Loader/>}
    </FormContextProvider>
  )
}
