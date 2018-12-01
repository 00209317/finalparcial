const express = require('express');
const router = express.Router();
const herbarioController = require('../controllers/HerbarioController');

router.get('/herbario',herbarioController.index);

module.exports = router;