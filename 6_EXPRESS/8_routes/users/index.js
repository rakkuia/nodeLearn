const express = require('express');
const router = express.Router();
const path = require('path');


const basePath = path.join(__dirname, '../templates');


router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

router.post('/save', (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`Name: ${name} age: ${age}`);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    //get from users from "table"
    console.log(`Getting user: ${id}`) 

    res.sendFile(`${basePath}/users.html`);
});

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});


module.exports = router;