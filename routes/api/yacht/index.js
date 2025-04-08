const express = require('express');
const { validationResult } = require('express-validator');
const { addYachtValidation } = require('../../../validators/yacht');

const router = express.Router();
const yacht_controller = require('../../../controllers/api/yacht');

router.get('/', (req, res)=>{
    yacht_controller.getAll(req, res);
});

router.post('/', addYachtValidation(), (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    yacht_controller.create(req, res)
})

module.exports = router;