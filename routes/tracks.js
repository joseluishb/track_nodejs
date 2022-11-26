const express = require('express');
const { validatorCreateItem } = require("../validators/tracks");
const { getItems, getItem, createItem } = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');

const router = express.Router();


//TODO http://localhost/tracks GET, POST, DELETE, PUT 


router.get("/", getItems);
router.post("/", validatorCreateItem, customHeader, createItem);


module.exports = router;
