const express = require('express')
const usersController = require('./controllers/usersController')
const userMiddleware = require('./middlewares/userMiddleware')
const router = express.Router()

router.get('/user', usersController.getUsers)
router.get('/user/:id', usersController.getUser)
router.post('/user', userMiddleware.validateBody, usersController.createUser)
router.delete('/user/:id', usersController.deleteUser)
router.put('/user/:id', userMiddleware.validateFieldEmail, usersController.updateUser)




module.exports = router