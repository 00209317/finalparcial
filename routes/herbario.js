const express = require('express');
const router = express.Router();
const herbarioController = require('../controllers/HerbarioController');

router.get('/', herbarioController.index);
router.post('/', herbarioController.insert);
router.delete('/', herbarioController.delete);

module.exports = router;