const express = require('express')
const yacht_router = require('./yacht')

const router = express.Router()

// registering child routers
router.use('/yacht', yacht_router)
module.exports = router
