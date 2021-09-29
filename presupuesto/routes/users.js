var express = require('express');
var router = express.Router();

const usersController = require('../controllers/userController')

/*Formulario de registro */
router.get('/register', usersController.register)
router.post('/register', usersController.processRegister)

/*Formulario de login */
router.get('/login', usersController.login)

/*Formulario de Usuario */
router.get('/profile/:uderId', usersController.profile)

module.exports = router;
