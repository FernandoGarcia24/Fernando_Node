const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;   // Conexion a la base de datos

    mongoose.set('strictQuery', false);

    mongoose.connect(DB_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,  
        // Devuelve una funcion calback
    }, (error, respuesta) => {

        if (!error) {
            console.log('**** Conexion correcta ****');
        } else {
            console.log('**** Error de conexion ****');
        }
    });
};

module.exports = dbConnect