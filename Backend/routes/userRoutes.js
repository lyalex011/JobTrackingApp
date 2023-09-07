const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const { authorize } = require('../middleware/authMiddleware')

router.get('/', authorize, userController.show)
router.put('/:authorId', authorize, userController.update)
router.delete('/:authorId', authorize, userController.delete)

module.exports = router