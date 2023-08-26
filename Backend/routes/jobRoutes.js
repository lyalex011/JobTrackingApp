const express = require('express')

const router = express.Router()

const jobController = require('../controllers/jobController')

const { authorize } = require('../middleware/authMiddleware')

// index
router.get('/:authorId', authorize, jobController.index)

// delete
router.delete('/:authorId/:id', authorize, jobController.delete)

// update
router.put('/:authorId/:id', authorize, jobController.update)

// create
router.post('/', authorize, jobController.create)

// show
router.get('/:authorId/:id', authorize, jobController.show)

module.exports = router