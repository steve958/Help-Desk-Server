const express = require('express')
const { addUserCP, getUserCP } = require('../controllers/userCPController')

const router = express.Router()

router.post('/usercp', addUserCP)
router.get('/usercp/:id', getUserCP)

module.exports = {
    routes: router
}