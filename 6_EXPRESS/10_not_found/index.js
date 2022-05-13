const express = require('express');
const app = express();
const port = 3000;

const path = require("path");
const users = require('./users');

//read Body
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//static files
app.use(express.static('public'));



const basePath = path.join(__dirname, 'templates');

app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`);
})

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

