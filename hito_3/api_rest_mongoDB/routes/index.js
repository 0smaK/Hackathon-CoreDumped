'use strict'

const express = require('express')
const api = express.Router()
const userController = require('../controllers/user')

api.get('/users', userController.getUsers)
api.get('/user/:userId', userController.getUser)
api.delete('/user/:userId', userController.deleteUser)
api.put('/user/:userId', userController.updateUser)
api.post('/users', userController.addUser)

module.exports = api