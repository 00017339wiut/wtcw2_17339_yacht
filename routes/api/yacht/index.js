const express = require('express');

const router = express.Router();
const yacht_controller = require('../../../controllers/api/yacht');

router.get('/', (req, res)=>{
    yacht_controller.getAll(req, res);
});

module.exports = router;
