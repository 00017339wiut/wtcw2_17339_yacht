// import specific service class
const yacht_service = require('../../../services/yacht/')

// mention the service's needed actions (methods)
const yacht_controller = {
    getAll(req, res) {
        res.json(yacht_service.getAll())
    }
}

module.exports = yacht_controller
