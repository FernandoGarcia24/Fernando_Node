
const handleHttpError = (res, message = "Algo susesio", code = 403) => {   //manejo de errores
    res.status(code);    //codigo de estado de la respuesta (403)
    res.send({ error: message});   //envia el mensaje de error
};

module.exports = {handleHttpError};