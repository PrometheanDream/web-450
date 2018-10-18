const express = require('express');
const router = express.Router();

let home_controller = require('../controllers/homeController');
var homePageController = require('../controllers/homePageController');

router.get('/', home_controller.index);


    


module.exports = router;
