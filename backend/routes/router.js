const express = require('express')
const {getUser, getUserByMail, addUser, getUserById} = require('../controllers/users')
const router = express.Router()

router.get('/', getUser)
router.get('/:mail', getUserByMail)
router.get('/:id', getUserById)
router.post('/', addUser)

module.exports = router