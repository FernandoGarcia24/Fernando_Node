
const express = require("express");
const router = express.Router();
const cursomHeader = require("../middleware/customHeader");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const {getItems, getItem, createItem, updateItem, deleteItem} = require ("../controllers/tracks");


// Todo http://localhost/tracks GET, POST, DELETE, PUT

/**
 * Lista de items
 */
router.get("/", getItems);

/**
 * Obtener lista de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crear un registro
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar un registro
 */
router.put("/:id", validatorCreateItem, validatorCreateItem, updateItem);

/**  
 * Eliminar registro
 */
router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router