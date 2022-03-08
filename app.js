const express = require('express');
const chalk = require('chalk');
const path = require('path');
const homeRouter = require('./routes/home-router');

// Variable de config
const port = 8080;
const rootDir = process.cwd();

// Créer le serveur Web
const app = express();

// Configurer le moteur de vue
// - Express va utiliser le moteur de vue automatiquement
app.set('view engine', 'ejs');
// - Configuration du répertoire dans lequel sont le vues
app.set('views', path.resolve(rootDir, 'views'));

// Ajout des routers
app.use(homeRouter);

// Demarrage du serveur
app.listen(port, () => {
    console.log(chalk.magenta(`Server up on port ${port}`));
});