//import d'express
const express = require('express');
//gestion des erreurs cors
const cors = require('cors');

//gestion des variables d'environnements
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

//import des routes
const charactersRoutes = require('./routes/characters');
app.use(charactersRoutes);
const comicsRoutes = require('./routes/comics');
app.use(comicsRoutes);

app.all('*', (req, res) => {
  res.status(400).json('Route introuvable');
});

app.listen(process.env.PORT, () => {
  console.log('Server has started ! 🤙');
});
