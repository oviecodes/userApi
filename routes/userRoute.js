const express = require('express');
const router = express.Router()

//import controllers
const controllers  = require('../controllers/userController') 

router.route('/')
    .get(controllers.getUsers)
    .post(controllers.createUser)


router.route('/:userid')
    .get(controllers.getUser)
    .put(controllers.updateUser)
    .delete(controllers.deleteUser)


module.exports = router