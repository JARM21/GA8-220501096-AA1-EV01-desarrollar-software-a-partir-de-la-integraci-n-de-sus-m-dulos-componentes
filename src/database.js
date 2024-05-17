//Logica para la conexión a la base de datos de MongoDB


const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/registro_usuarios')

    .then(db => console.log("Database is connected"))