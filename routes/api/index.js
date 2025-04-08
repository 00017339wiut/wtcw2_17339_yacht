const express = require('express')
const yacht_router = require('./yacht')
const router = express.Router()
router.use('/yacht', yacht_router)
module.exports = router