const express = require('express');
const { createItem } = require('../controllers/storage');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')

//TODO http://localhost:3100/api/storage


router.post("/", uploadMiddleware.single("myfile") , createItem);

module.exports = router;