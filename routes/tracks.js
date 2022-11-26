const express = require('express');
const { validatorCreateItem } = require("../validators/tracks");
const { getItems, getItem, createItem } = require('../controllers/tracks');

const router = express.Router();


//TODO http://localhost/tracks GET, POST, DELETE, PUT 


router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);


module.exports = router;
