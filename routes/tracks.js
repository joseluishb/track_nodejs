const express = require('express');
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const authMiddleware = require('../middleware/session');

const router = express.Router();


//TODO http://localhost/tracks GET, POST, DELETE, PUT 

/**
 * Listar los items
 */
router.get("/", authMiddleware,  getItems);

/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem , getItem);

/**
 * Crear un registro
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un registro
 */
router.delete("/:id", validatorGetItem , deleteItem);

module.exports = router;
