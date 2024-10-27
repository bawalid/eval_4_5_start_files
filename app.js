// Importer les modules nécessaires (Express, Mongoose)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialiser Express
const app = express();
app.use(bodyParser.json());

// Connexion à MongoDB (configurer avec URL directe ici)

// Schéma et Modèle pour la collection "tasks" (à créer ci-dessous)

// Route GET pour récupérer toutes les tâches

// Route POST pour ajouter une nouvelle tâche

// Route PUT pour mettre à jour une tâche par ID

// Route DELETE pour supprimer une tâche par ID

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
