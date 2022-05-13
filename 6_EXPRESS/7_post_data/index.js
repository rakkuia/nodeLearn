const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

//read Body
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const basePath = path.join(__dirname, 'templates');


app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`Name: ${name} age: ${age}`);
})

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

