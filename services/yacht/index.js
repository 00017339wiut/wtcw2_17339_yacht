const fs = require('fs')

// access global mock db file
const yachts = require(global.db)

// write service method implementations
const yacht_service = {
    getAll() {
        return yachts
    },
    create(req, res) {
        let new_id = genRandId(4)
        const yacht = req.body

        const new_yacht = {
            id: new_id,
            yacht: yacht
        }

        yachts.push(new_yacht)
        writeToFile(yachts)
        return new_yacht
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id 
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = yacht_service