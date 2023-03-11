
const { tracksModel } = require('../models');
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista de la base de datos  
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {

    try {
        
        const body = matchedData(req);
 
        const data = await tracksModel.find({});  // busca un elemento en la base de datos.
        res.send({ data });   //Se envía la respuesta con los datos obtenidos.
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};

/**
 * obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => { //obtener elemento

    try {
        req = matchedData(req);    // Se obtiene los datos del request y se validan con matchedData.
        const { id } = req;  // obtiene el id
        const data = await tracksModel.findById(id);  // se  busca el elemento
        res.send({ data });  // se envia
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {  //crear elemento

    try {

        const body = matchedData(req);   // Obtiene los datos del request(solicitud de respuesta). Elimina datos basura
        const data = await tracksModel.create(body); // Crea el elemento usando el modelo tracksModel.
        res.send({ data }); //envia con datos creados
    } catch (e) {
        handleHttpError(res, "ERROR_CREANDO_ITEMS")
    }
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {  //actualizar elementos

    try {

        const {id, ...body} = matchedData(req);  //obtiene el id y el resto de los datos

        const data = await tracksModel.findOneAndUpdate( id, body ); // Se busca y se actualiza el elemento con el id especificado.
        res.send({ data });  //envia los datos actualizados
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS")
    }
};

/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {  //eliminar elementos

    try {
        req = matchedData(req);   // Obtiene los datos del request y los almacena
        const { id } = req;   // obtiene id
        const data = await tracksModel.delete({_id:id});  // Elimina el elemento con el id especificado de la base de datos.
        res.send({ data }); //envia los datos
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
};
 

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };