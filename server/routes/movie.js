var express = require('express');
var router = express.Router();
//requires controller files
var authencontroller = require('../controller/authentication.js');
var moviecontroller = require('../controller/moviecontroller.js');

//callbacks the signup function in controller
router.post('/signup', authencontroller.signup);

//callbacks the login function in controller
router.post('/login', authencontroller.login);

//callbacks the search function in controller
router.get('/movie/search:index=?', moviecontroller.search);

//callbacks the add function in controller
router.post('/movie/add', moviecontroller.add);

//callbacks the view function in controller
router.get('/movie/view', moviecontroller.view);

//callbacks the delete function in controller
router.get('/movie/delete', moviecontroller.delete);

//callbacks the logout function in controller
router.get('/movie/logout', moviecontroller.logout);

module.exports = router;
