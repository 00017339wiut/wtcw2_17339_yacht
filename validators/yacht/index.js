const { body } = require('express-validator');

const addYachtValidation = () => {
    return [
        body('yachtName')
            .notEmpty().withMessage('Yacht needs to have a name.')
            .isLength({ min: 4, max: 255 }).withMessage('The yacht has to have a name between 4 and 255 characters'),
        body('yachtDateTime')
            .notEmpty().withMessage('Yacht date time of insertion into system can not be empty')
            .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
                .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),
        body('location')
            .notEmpty().withMessage('please specify the yacht location.'),
        body('ownerPhone')
            .notEmpty().withMessage('yacht owner phone number/contact can not be empty')
            .matches(/^\+998\d{9}$/).withMessage('not a valid phone number format, it must be +998xxxxxxxxx'),
        body('accommodates')
            .notEmpty().withMessage('Cannot insert yacht which accommodates 0 people.'),
    ];
};

module.exports = {
    addYachtValidation
};
