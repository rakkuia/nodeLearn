const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, 'templates');



app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    //get from users from "table"
    console.log(`Getting user: ${id}`) 

    res.sendFile(`${basePath}/users.html`);
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})