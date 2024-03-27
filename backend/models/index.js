const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/dbName', {   //DatabaseName à définir
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connexion à la base de données MongoDB réussie.');
})
.catch((error) => {
  console.error('Erreur lors de la connexion à la base de données MongoDB :', error);
  process.exit(1); // Arrêt de l'application en cas d'erreur de connexion
});

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Utilisation du routeur pour gérer les différentes routes
app.use('/', routes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}.`);
});
