

const express = require("express");
const router = express.Router();
const uploadMiaddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage")
const  { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/storage")
// Todo http://localhost:3001/storage


/**
 * Lista de items
 */
router.get("/", getItems);

/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);  //obtener

/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItem);  //eliminar

/**
 * Crear item
 */
router.post("/", uploadMiaddleware.single("myfile"), createItem);  //crear


module.exports = router;