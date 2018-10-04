var express = require('express');
var router = express.Router();

var homePageController = require('../controllers/homePageController');

router.get('/', homePageController.findAllQuizzes);

module.exports = router;