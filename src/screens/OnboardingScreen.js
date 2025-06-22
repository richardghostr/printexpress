"use client"

import { useState, useRef } from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const { width, height } = Dimensions.get("window")

const onboardingData = [
  {
    id: 1,
    title: "Gagnez du temps avec des commandes d'impression rapides",
    description:
      "Commandez des impressions où que vous soyez et évitez l'attente à l'imprimerie. Préparez vos documents plus rapidement que jamais.",
    backgroundColor: "#FFD4C4",
    illustration: "📄",
  },
  {
    id: 2,
    title: "Commandez des impressions à tout moment, n'importe où",
    description:
      "Avec PRINTEXPRESS, commandez vos impressions depuis votre téléphone ou votre tablette, où que vous soyez. Plus besoin de vous déplacer en magasin ni d'utiliser un ordinateur.",
    backgroundColor: "#2C3E50",
    illustration: "📱",
  },
  {
    id: 3,
    title: "Faites livrer vos impressions",
    description: "Recevez votre document et votre preferred location, saving you time and effort.",
    backgroundColor: "#F4E4BC",
    illustration: "📦",
  },
  {
    id: 4,
    title: "Restez à jour",
    description:
      "Recevez vos notifications en temps réel sur vos commandes d'impression. Dès livraison, vous assurant ainsi d'être toujours au courant.",
    backgroundColor: "#E8F4FD",
    illustration: "🔔",
  },
  {
    id: 5,
    title: "Personnalisez vos impressions",
    description:
      "Personnalisez chaque détail de vos impressions, du format du papier à la reliure, en vous assurant que vos documents sont parfaitement adaptés à vos besoins.",
    backgroundColor: "#F5D5AE",
    illustration: "🎨",
  },
]

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollViewRef = useRef(null)

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      })
    } else {
      navigation.navigate("Pricing")
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      scrollViewRef.current?.scrollTo({
        x: prevIndex * width,
        animated: true,
      })
    }
  }

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const index = Math.round(scrollPosition / width)
    setCurrentIndex(index)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {onboardingData.map((item, index) => (
          <View key={item.id} style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.content}>
              <View style={styles.illustrationContainer}>
                <Text style={styles.illustration}>{item.illustration}</Text>
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? "#007AFF" : "#C7C7CC",
                width: index === currentIndex ? 20 : 8,
              },
            ]}
          />
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        >
          <Text style={[styles.buttonText, { opacity: currentIndex === 0 ? 0.3 : 1 }]}>Retour</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
          <Text style={[styles.buttonText, styles.nextButtonText]}>
            {currentIndex === onboardingData.length - 1 ? "Commencer" : "Suivant"}
          </Text>
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
  slide: {
    width: width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 350,
  },
  illustrationContainer: {
    width: 200,
    height: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  illustration: {
    fontSize: 80,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#1A1A1A",
    lineHeight: 30,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
    lineHeight: 24,
    marginBottom: 40,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: 100,
    alignItems: "center",
  },
  backButton: {
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
})
