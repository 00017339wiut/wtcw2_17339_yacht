// import the service class
const yacht_service = require('../../../services/yacht')

// file paths for pages
const home_controller = {
    // landing page
    index: async (req, res) =>{
        res.render('home');
    },
    // add
    add: async (req, res) =>{
        res.render('home/add_update', { mode: 'Add' });
    },
    // update
    update: async (req, res) =>{
        const yachtData = await yacht_service.getById(req.params.id);
        res.render('home/add_update', { mode: 'Update', yachtData: yachtData });
    }
};

module.exports = home_controller;