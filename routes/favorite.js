const express = require('express');
const router = express.Router();

const favoriteController = require('../controllers/favorite_controller');
router.get('/post', favoriteController.favorite);
module.exports = router;