const express = require('express')
const router = express.Router()
// import the controller here
const userController = require('../controllers/userController')
const { authorize } = require('../middleware/authMiddleware')

router.get('/', authorize, userController.show)
router.put('/', authorize, userController.update)
router.delete('/', authorize, userController.delete)

module.exports = router