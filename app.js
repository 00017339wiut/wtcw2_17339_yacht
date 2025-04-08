const express = require('express')
const body_parser = require('body-parser')
const path = require('path')

// global database
global.yachtsdb = path.join(__dirname, './data/yachtsguys.json');

// routing web n api
const web_route = require('./routes/web')
const api_route = require('./routes/api');

const app = express();
app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); 
app.use('/', web_route); 

// redirect to home page
app.use((req, res) => {
    res.redirect('/');
});


// it's 2025 why not port 2025 
const port = 2025;
app.listen(port, () => console.log(`Server running on port ${port}`));