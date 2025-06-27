# PrintExpress

PrintExpress est une application mobile qui simplifie la création de compte et l'accès à un service d'impression moderne. L'application propose une expérience utilisateur fluide avec onboarding, inscription multi-étapes et authentification.

## Fonctionnalités actuellement disponibles

- **Onboarding interactif** : Présentation des avantages de l'application dès le lancement.
- **Création de compte (inscription multi-étapes)** :
  - Saisie des informations personnelles (nom, prénom, lieu et date de naissance)
  - Localisation (ville, institution)
  - Coordonnées (email, téléphone)
  - Création et confirmation du mot de passe
  - Téléversement de documents (CNI/récépissé, photo de profil)
- **Connexion sécurisée** :
  - Authentification par email/nom d'utilisateur et mot de passe
  - Option d'affichage/masquage du mot de passe
  - Lien pour mot de passe oublié (à implémenter)
  - Bouton "Continuer avec Google" (intégration à compléter)
- **Navigation fluide** :
  - Accueil, onboarding, inscription, connexion
  - Navigation entre les étapes et gestion de l'état du formulaire
- **Interface moderne** :
  - Composants réutilisables (boutons, formulaires, champs de saisie, etc.)
  - Thème de couleurs et polices personnalisées

## Fonctionnalités prévues mais non encore implémentées

- Commande et gestion d'impressions
- Paiement en ligne
- Suivi de commande et notifications
- Livraison à domicile
- Gestion du profil utilisateur après inscription

## Installation

1. Installez les dépendances :

   ```bash
   npm install
   ```

2. Démarrez l'application :

   ```bash
   npx expo start
   ```

## Développement

Modifiez les fichiers dans le dossier **app** pour développer de nouvelles fonctionnalités ou personnaliser l'application. Ce projet utilise le [routing basé sur les fichiers](https://docs.expo.dev/router/introduction).

## En savoir plus

- [Documentation Expo](https://docs.expo.dev/)
- [Tutoriel Expo](https://docs.expo.dev/tutorial/introduction/)
- [Expo sur GitHub](https://github.com/expo/expo)
- [Communauté Discord](https://chat.expo.dev)
