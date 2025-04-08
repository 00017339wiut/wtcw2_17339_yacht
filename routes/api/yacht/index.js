// validation
const express = require('express');
const { validationResult } = require('express-validator');
const { addYachtValidation, updateYachtValidation, deleteYachtValidation } = require('../../../validators/yacht');

const router = express.Router();
const yacht_controller = require('../../../controllers/api/yacht');

// api routes
router.get('/', (req, res)=>{
    yacht_controller.getAll(req, res);
});

// adding validation
router.post('/', addYachtValidation(), (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    yacht_controller.create(req, res)
})

// update validation
router.put('/:id', updateYachtValidation(), (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    yacht_controller.update(req, res)
})

// del vlaidation 
router.delete('/:id', deleteYachtValidation(), (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    yacht_controller.delete(req, res)
})

module.exports = router;