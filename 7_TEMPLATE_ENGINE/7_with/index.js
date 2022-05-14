const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/dashboard', (req, res) => {

    const items = ["A item", "B item", "C item"];

    res.render('dashboard', {items});
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Learn Node.js',
        category: 'JavaScript',
        body: 'This article will teach you how to use Node.js',
        comments: 4
    }
res.render('blogpost', {post});

})

app.get('/', (req, res) => {
    const user ={
        name: "r",
        surname: "rakk"
    }

    const word = 'word';
    
    const auth = true;

    const approved = false;

    res.render('home', {user: user, word, auth, approved});
})

app.listen(3000, () =>{ 
    console.log('App initialized');
})