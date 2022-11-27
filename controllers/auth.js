const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt } = require("../utils/handlePassword");


const registerCtrl = async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = {...req, password }
  const dataUser = await usersModel.create(body);
  dataUser.set('password', undefined, {'strict': false});

  const data = {
    token: await tokenSign(dataUser),
    user: dataUser
  }
  
  res.send({data})
};

module.exports = { registerCtrl }