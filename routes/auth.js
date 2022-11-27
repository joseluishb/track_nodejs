const express = require("express");
const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { encrypt, compare } = require("../utils/handlePassword");
const { validatorRegister } = require("../validators/auth");
const router = express.Router();

/**
 * Crear un registro
 */
router.post("/register",  validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = {...req, password }
  const data = await usersModel.create(body);
  data.set('password', undefined, {'strict': false})
  
  res.send({data})
});

module.exports = router;