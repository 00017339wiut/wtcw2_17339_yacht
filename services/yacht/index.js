const fs = require('fs')
// access global mock db file
const yachts = require(global.db)

// write service method implementations
const yacht_service = {
    getAll() {
        return yachts
    }
}

module.exports = yacht_service
