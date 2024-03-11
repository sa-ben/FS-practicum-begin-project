const express = require("express")
const User = require('../models/User')
const router = express.Router()
const userController = require('../controllers/userController')

//creacte a user
router.post('/', userController.createUser)

//read
//get all users
router.get('/', userController.getAllUsers)

//get user by id
router.get('/:id', userController.getUserById)

//update a user
router.put('/', userController.updateUser)

//delete a user
router.delete('/',userController.deleteUser)

module.exports = router