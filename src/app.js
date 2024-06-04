const express = require('express');
const app = express();
const cors = require('cors'); // Importa cors

//app.use(cors()); // Permite todas las solicitudes CORS
// O configura específicamente el origen
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./controllers/userController'));

module.exports = app;