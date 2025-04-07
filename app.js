// express web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// the database
global.mock_db = path.join(__dirname, './data/yachts_db.json');

const app = express();

app.get('/', function(req, res){
    return res.json({
        message: 'hello world'
    })

})

// running on port 1439
const port = 1439;
app.listen(port, () => console.log(`Server running on port ${port}`));
