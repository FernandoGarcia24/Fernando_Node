const mongoose = require("mongoose");

const dbConnect = () => {

    const DB_URI = process.env.DB_URI;

    mongoose.set('strictQuery', false);

    mongoose.connect(DB_URI, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (error, respuesta) => {

        if (!error) {
            console.log('**** Conexion correcta ****');
        } else {
            console.log('**** Error de conexion ****');
        }
    });
};

module.exports = dbConnect