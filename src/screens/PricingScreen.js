import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const { width } = Dimensions.get("window")

export default function PricingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PRINTEXPRESS</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Icon and Title */}
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Text style={styles.icon}>💰</Text>
          </View>
        </View>

        <Text style={styles.title}>PRICING</Text>
        <Text style={styles.subtitle}>Tarifs en personne</Text>

        {/* Description */}
        <Text style={styles.description}>
          Comparez les tarifs en ligne et en magasin pour vos travaux d'impression. Visitez notre boutique pour obtenir
          un devis détaillé.
        </Text>

        {/* Pricing Cards */}
        <View style={styles.pricingContainer}>
          <View style={styles.pricingCard}>
            <Text style={styles.cardTitle}>Impression Noir & Blanc</Text>
            <Text style={styles.cardPrice}>À partir de 0,05€</Text>
            <Text style={styles.cardDescription}>Par page A4 standard</Text>
          </View>

          <View style={styles.pricingCard}>
            <Text style={styles.cardTitle}>Impression Couleur</Text>
            <Text style={styles.cardPrice}>À partir de 0,15€</Text>
            <Text style={styles.cardDescription}>Par page A4 standard</Text>
          </View>

          <View style={styles.pricingCard}>
            <Text style={styles.cardTitle}>Photocopie</Text>
            <Text style={styles.cardPrice}>À partir de 0,03€</Text>
            <Text style={styles.cardDescription}>Par page A4 standard</Text>
          </View>

          <View style={styles.pricingCard}>
            <Text style={styles.cardTitle}>Reliure</Text>
            <Text style={styles.cardPrice}>À partir de 2,00€</Text>
            <Text style={styles.cardDescription}>Selon le type de reliure</Text>
          </View>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Avantages inclus :</Text>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Livraison gratuite sur le campus</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Notifications en temps réel</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Support client 24/7</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <Text style={styles.featureText}>Paiement sécurisé</Text>
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
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
    fontWeight: "bold",
    color: "#1A1A1A",
    marginRight: 34, // Compensate for back button width
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  iconWrapper: {
    width: 100,
    height: 100,
    backgroundColor: "#FFF3CD",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A1A1A",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#666666",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  pricingContainer: {
    marginBottom: 30,
  },
  pricingCard: {
    backgroundColor: "#F8F9FA",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666666",
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 15,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 16,
    color: "#28A745",
    marginRight: 12,
    fontWeight: "bold",
  },
  featureText: {
    fontSize: 16,
    color: "#666666",
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },
  continueButton: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
})
