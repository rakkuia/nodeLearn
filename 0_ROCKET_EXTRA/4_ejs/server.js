const { application } = require('express');
const express = require('express');
const exp = express();

exp.set("view engine", "ejs");

exp.get("/", function(req, res){
    res.render('pages/index');
})

exp.get("/extra", function(req, res){
    res.render('pages/extra');
})

exp.listen(1000);
console.log('listening on 1000');