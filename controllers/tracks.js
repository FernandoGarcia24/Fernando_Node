
const {tracksModel} = require('../models')

/**
 * Obtener lista de la base de datos  
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({data});
 };

/**
 * obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => { };

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = (req, res) => { };

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => { };

/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { };


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };