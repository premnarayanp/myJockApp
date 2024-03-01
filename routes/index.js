const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controllers');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/favorite', require('./favorite'));
router.use('/jock', require('./jock'));
module.exports = router;