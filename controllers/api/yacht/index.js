// importing service class
const yacht_service = require('../../../services/yacht')

// CRUD methods
const yacht_controller = {
    // load/read
    getAll(req, res) {
        res.json(yacht_service.getAll())
    },
    
    // adding
    create(req, res) {
        res.status(201).json(
            yacht_service.create(req, res)
        )
    },

    // updating
    update(req, res) {
        const yacht = yacht_service.update(req.params.id, req.body)

        if (yacht) {
            res.json(yacht)
        } 
        else {
            res.status(404).send('yacht not found')
        }
    },
    // deleting
    delete(req, res) {
        const yacht = yacht_service.getById(req.params.id)

        if (yacht) {
            yacht_service.delete(req.params.id)
            res.status(204).send('yacht removed')
        } 
        else {
            res.status(404).send('yacht not found')
        }
    }
}

module.exports = yacht_controller