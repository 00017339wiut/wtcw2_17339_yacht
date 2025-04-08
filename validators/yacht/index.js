const { body, param } = require('express-validator');
const yacht_service = require('../../services/yacht')

// input validation (on form)
const addYachtValidation = () => {
    return [
        body('yachtType')
            .notEmpty().withMessage('yacht type has to have text'),
        body('yachtName')
            .notEmpty().withMessage('yacht name has to have text')
            .isLength({ min: 4, max: 200 }).withMessage('yacht name has to be 4-200 characters'),
        body('addedDate')
            .notEmpty().withMessage('you need an added date')
            .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
            .withMessage('wrong date n time format, use "DD/MM/YYYY HH:mm" format'),
        body('ownerPhone')
            .notEmpty().withMessage('we need the owner phone number')
            .matches(/^\+998\d{9}$/).withMessage('wrong phone number format, it has to be +998 and a valid number'),
        body('yachtLength')
            .notEmpty().withMessage('yacht length cannot be 0 - then the yacht does not exist'),
    ];
};

const deleteYachtValidation = () => {
    return [
        param('id').custom(async (id) => {
            const exists = await yacht_service.getById(id);
            if (!exists) {
                throw new Error('yacht not found');
            }
        })
    ];
};

const updateYachtValidation = () => {
    return [
        param('id').custom(async (id) => {
            const exists = await yacht_service.getById(id);
            if (!exists) {
                throw new Error('yacht not found');
            }
        }),
        body('yachtType')
            .notEmpty().withMessage('yacht type has to have text'),
        body('yachtName')
            .notEmpty().withMessage('yacht name has to have text')
            .isLength({ min: 4, max: 200 }).withMessage('yacht name has to be 4-200 characters'),
        body('addedDate')
            .notEmpty().withMessage('you need an added date')
            .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
            .withMessage('wrong date n time format, use "DD/MM/YYYY HH:mm" format'),
        body('ownerPhone')
            .notEmpty().withMessage('we need the owner phone number')
            .matches(/^\+998\d{9}$/).withMessage('wrong phone number format, it has to be +998 and a valid number'),
        body('yachtLength')
            .notEmpty().withMessage('yacht length cannot be 0 - then the yacht does not exist'),
    ];
};

// export validation
module.exports = {
    addYachtValidation,
    updateYachtValidation,
    deleteYachtValidation
};