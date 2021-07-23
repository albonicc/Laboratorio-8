const express = require('express');
const app = express();

const { config } = require('./config/index');
const api = require('./routes/api.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true })) 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/tables', (req, res) => {
    res.sendFile(__dirname + '/views/tables.html');
});

app.get('/reserve', (req, res) => {
    res.sendFile(__dirname + '/views/reserve.html');
});

api(app);

app.listen(config.port), () => {
    console.log(`Listening http://localhost:${config.port}`);
}