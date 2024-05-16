const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/', (req, res) => {
    res.send('Hello Vijay!');
})

app.listen(3000);

 