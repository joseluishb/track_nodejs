const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");

const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router();

/**
 * http://localhost:3001/api
 * 
 * Route register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Registrar nuevo usario"
 *          description: "Esta ruta es para registrar un nuevo usuario"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: El usuario se registra de manera correcta
 *                  '403':
 *                      description: Error por validación
 */
router.post("/register",  validatorRegister, registerCtrl);


router.post("/login",  validatorLogin, loginCtrl);

module.exports = router;