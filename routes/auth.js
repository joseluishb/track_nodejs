const express = require("express");
const { registerCtrl } = require("../controllers/auth");

const { validatorRegister } = require("../validators/auth");
const router = express.Router();

/**
 * Crear un registro
 */
router.post("/register",  validatorRegister, registerCtrl);

module.exports = router;