const express = require('express');
const router = express.Router();

const jockController = require('../controllers/jock_controller');
router.get('/search', jockController.jock);
module.exports = router;