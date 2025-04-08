const fs = require('fs')

// db
const yachts = require(global.yachtsdb)

// methods
const yacht_service = {
    getAll() {
        return yachts
    },
    getById(id) {
        return yachts.find(y => y.id == id)
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
    },
    update(id, updateData){
        const yachtIndex = yachts.findIndex(y => y.id == id)
        
        if (yachtIndex === -1) {
            return null
        }

        yachts[yachtIndex].yacht = { ...yachts[yachtIndex].yacht, ...updateData }

        writeToFile(yachts)

        return yachts[yachtIndex]
    },
    delete(id) {
        const index = yachts.findIndex(u => u.id == id)
        yachts.splice(index, 1)
        writeToFile(yachts)
    }
}


let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.yachtsdb,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generating random numeric id
let genRandId = (count) =>{
    let result = ''
    const nums = '0123456789'
    const numsLength = nums.length
    for (let i = 0; i < count; i++) {
        result += nums.charAt(Math.floor(Math.random() * numsLength))
    }
    return result
}

module.exports = yacht_service