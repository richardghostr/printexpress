"use client"

import { useState, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import * as ImagePicker from "expo-image-picker"

const registerSteps = [
  {
    id: 1,
    title: "Informations personnelles",
    fields: ["nom", "prenom", "dateNaissance", "lieuNaissance"],
  },
  {
    id: 2,
    title: "Où es-vous situé?",
    fields: ["ville", "institution"],
  },
  {
    id: 3,
    title: "Saisissez vos informations de contact",
    fields: ["email", "telephone"],
  },
  {
    id: 4,
    title: "Sécurisez votre compte",
    fields: ["motDePasse", "confirmerMotDePasse"],
  },
  {
    id: 5,
    title: "Mettez à jour votre photo de profil",
    fields: ["photoProfil", "photoCNI"],
  },
]

export default function RegisterScreen({ navigation }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    lieuNaissance: "",
    ville: "",
    institution: "",
    email: "",
    telephone: "",
    motDePasse: "",
    confirmerMotDePasse: "",
    photoProfil: null,
    photoCNI: null,
  })

  const scrollViewRef = useRef(null)

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < registerSteps.length) {
        setCurrentStep(currentStep + 1)
      } else {
        handleRegister()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateCurrentStep = () => {
    const currentStepData = registerSteps[currentStep - 1]
    const requiredFields = currentStepData.fields.filter((field) => field !== "institution")

    for (const field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        Alert.alert("Erreur", "Veuillez remplir tous les champs obligatoires")
        return false
      }
    }

    if (currentStep === 4) {
      if (formData.motDePasse !== formData.confirmerMotDePasse) {
        Alert.alert("Erreur", "Les mots de passe ne correspondent pas")
        return false
      }
      if (formData.motDePasse.length < 6) {
        Alert.alert("Erreur", "Le mot de passe doit contenir au moins 6 caractères")
        return false
      }
    }

    return true
  }

  const handleRegister = () => {
    console.log("Registration data:", formData)
    Alert.alert("Succès", "Inscription réussie !", [{ text: "OK", onPress: () => navigation.navigate("Login") }])
  }

  const pickImage = async (type) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== "granted") {
      Alert.alert("Permission requise", "Nous avons besoin d'accéder à vos photos")
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: type === "photoProfil" ? [1, 1] : [4, 3],
      quality: 0.8,
    })

    if (!result.canceled) {
      updateFormData(type, result.assets[0].uri)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nom(*)</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre nom"
                value={formData.nom}
                onChangeText={(value) => updateFormData("nom", value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Prénom(*)</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre prénom"
                value={formData.prenom}
                onChangeText={(value) => updateFormData("prenom", value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Date de naissance</Text>
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                value={formData.dateNaissance}
                onChangeText={(value) => updateFormData("dateNaissance", value)}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Lieu de naissance</Text>
              <TextInput
                style={styles.input}
                placeholder="Ville"
                value={formData.lieuNaissance}
                onChangeText={(value) => updateFormData("lieuNaissance", value)}
              />
            </View>
          </View>
        )

      case 2:
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Ville</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre ville"
                value={formData.ville}
                onChangeText={(value) => updateFormData("ville", value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Institution (optionnel)</Text>
              <TextInput
                style={styles.input}
                placeholder="Nom de votre institution"
                value={formData.institution}
                onChangeText={(value) => updateFormData("institution", value)}
              />
            </View>
          </View>
        )

      case 3:
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre email"
                value={formData.email}
                onChangeText={(value) => updateFormData("email", value)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Numéro de téléphone</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre numéro"
                value={formData.telephone}
                onChangeText={(value) => updateFormData("telephone", value)}
                keyboardType="phone-pad"
              />
            </View>
          </View>
        )

      case 4:
        return (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre mot de passe"
                value={formData.motDePasse}
                onChangeText={(value) => updateFormData("motDePasse", value)}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirmer votre mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirmez votre mot de passe"
                value={formData.confirmerMotDePasse}
                onChangeText={(value) => updateFormData("confirmerMotDePasse", value)}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
          </View>
        )

      case 5:
        return (
          <View style={styles.formContainer}>
            <View style={styles.photoSection}>
              <TouchableOpacity style={styles.photoContainer} onPress={() => pickImage("photoProfil")}>
                {formData.photoProfil ? (
                  <Image source={{ uri: formData.photoProfil }} style={styles.profileImage} />
                ) : (
                  <View style={styles.placeholderImage}>
                    <Text style={styles.placeholderText}>📷</Text>
                    <Text style={styles.placeholderLabel}>Ajouter une photo</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Mettez à jour votre CNI ou Récépissé</Text>

            <TouchableOpacity style={styles.documentContainer} onPress={() => pickImage("photoCNI")}>
              {formData.photoCNI ? (
                <Image source={{ uri: formData.photoCNI }} style={styles.documentImage} />
              ) : (
                <View style={styles.documentPlaceholder}>
                  <Text style={styles.documentIcon}>🆔</Text>
                  <Text style={styles.documentText}>Ajouter votre CNI</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        )

      default:
        return null
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>création de compte</Text>
        </View>

        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          {registerSteps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                {
                  backgroundColor: index + 1 === currentStep ? "#007AFF" : "#C7C7CC",
                  width: index + 1 === currentStep ? 20 : 8,
                },
              ]}
            />
          ))}
        </View>

        <ScrollView
          ref={scrollViewRef}
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Step Title */}
          <Text style={styles.stepTitle}>{registerSteps[currentStep - 1].title}</Text>

          {/* Step Content */}
          {renderStepContent()}
        </ScrollView>

        {/* Navigation Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.backButtonNav]}
            onPress={handlePrevious}
            disabled={currentStep === 1}
          >
            <Text style={[styles.buttonText, { opacity: currentStep === 1 ? 0.3 : 1 }]}>
              {currentStep === 5 ? "Back" : "Retour"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
            <Text style={[styles.buttonText, styles.nextButtonText]}>
              {currentStep === registerSteps.length ? "Register" : "Suivant"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            {currentStep === 5 ? "Already have an account? " : "Vous avez déjà un compte ? "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>{currentStep === 5 ? "Log in" : "Connectez-vous"}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    fontSize: 24,
    color: "#007AFF",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#1A1A1A",
    marginRight: 34,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  progressDot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 30,
    textAlign: "left",
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    backgroundColor: "#F8F9FA",
  },
  photoSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  photoContainer: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#F0F8FF",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholderImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 40,
    marginBottom: 10,
  },
  placeholderLabel: {
    fontSize: 16,
    color: "#666666",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 15,
  },
  documentContainer: {
    height: 150,
    borderRadius: 15,
    backgroundColor: "#2C3E50",
    overflow: "hidden",
  },
  documentImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  documentPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  documentIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  documentText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: 100,
    alignItems: "center",
  },
  backButtonNav: {
    backgroundColor: "transparent",
  },
  nextButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  nextButtonText: {
    color: "#FFFFFF",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  loginText: {
    fontSize: 14,
    color: "#666666",
  },
  loginLink: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },
})
