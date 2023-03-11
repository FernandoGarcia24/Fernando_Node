const { validationResult } = require("express-validator");
  
const validationResults = (req, res, next) => {          //Esta función valida los resultados de la solicitud y devuelve un error si hay algún problema.
    try {
        validationResult(req).throw();                   //Si no hay errores, continua hacia el controlador.
        return next();                                   // continua hacia el controlador
    } catch (err) {
        res.status(403);                                 //Si hay errores, establece el estado en 403 y envía los errores 
        res.send({ errors: err.array() });
    }
} 

module.exports = validationResults