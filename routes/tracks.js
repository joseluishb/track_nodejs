const express = require('express');
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');

const router = express.Router();


//TODO http://localhost/tracks GET, POST, DELETE, PUT 

/**
 * Listar los items
 */
router.get("/", authMiddleware,  getItems);

/**
 * Obtener detalle de item
 */
router.get("/:id", authMiddleware, validatorGetItem , getItem);

/**
 * Crear un registro
 */
router.post("/", authMiddleware, checkRol(['admin']), validatorCreateItem, createItem);

/**
 * Actualizar un registro
 */
router.put(
  "/:id",
  authMiddleware, validatorGetItem,
  validatorCreateItem,
  updateItem
);

/**
 * Eliminar un registro
 */
router.delete("/:id", authMiddleware,  validatorGetItem , deleteItem);

module.exports = router;
