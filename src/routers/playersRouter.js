const express = require('express');
const { playersController } = require('../controllers');

const router = express.Router();

router.get('/', playersController.getAllPlayers);
router.get('/:id', playersController.getPlayerById);
router.get('/country/:id', playersController.getPlayerByCountryId);

module.exports = router;