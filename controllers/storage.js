
const fs = require("fs");
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * Obtener lista de la base de datos  
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => { //se encarga de obtener los elementos almacenados en el modelo de almacenamiento.

    try {

        const data = await storageModel.find({}); //Se almacena el objeto en la base de datos y se obtiene el resultado de la operación 
        res.send({ data }); //Se envía una respuesta con los datos almacenados 
    } catch (e) {
        handleHttpError(res, "ERROR_LIST_ITEM"); //error
    }
};

/**
 * obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => { //se encarga de obtener un elemento del almacenamiento

    try {

        const { id } = matchedData(req);  // Extraer el valor de la propiedad "id" del objeto "matchedData"
        const data = await storageModel.findById(id);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }
};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {

    try {

        const { file } = req;    //obtener el body y el file.
        const fileData = {
            filename: file.filename, 
            url: `${PUBLIC_URL}/${file.filename}`   //Se crea el objeto con los datos del archivo
        }
        const data = await storageModel.create(fileData) // Se almacena el objeto en la base de datos y se obtiene el resultado de la operación 
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DETAIL_ITEMS");   //error
    }

};

/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {  //eliminar un elemento de la base de datos y su archivo asociado.

    try {
        const { id } = matchedData(req);  //Obtiene el id del elemento
        const dataFile = await storageModel.findById(id);  // Busca el elemento en la base de datos.
        await storageModel.delete({ _id: id });  //Elimina el elemento
        const { filename } = dataFile;   //Obtiene el nombre del archivo asociado al elemento a eliminar
        const filepath = `${MEDIA_PATH}/${filename}`; // Construye la ruta al archivo asociado al elemento a eliminar.

        // fs.unlinkSync(filepath);
        const data = {  // Crea un objeto con los datos necesarios para responder a la solicitud.
            filepath,
            deleted: 1
        }
        
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DETAIL_ITEMS");
    }

};


module.exports = { getItems, getItem, createItem, deleteItem }; 