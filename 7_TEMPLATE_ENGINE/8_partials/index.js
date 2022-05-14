const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get('/dashboard', (req, res) => {

    const items = ['A item', 'B item', 'C item'];

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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Learn Node.js',
            category: 'JavaScript',
            body: 'This article will teach you how to use Node.js',
            comments:4
        },
        {
            title: 'Learn PHP',
            category: 'PHP',
            body: 'This article will teach you how to use PHP',
            comments:4
        },
        {
            title: 'Learn Python',
            category: 'Python',
            body: 'This article will teach you how to use Python',
            comments:4
        }
    ]

    res.render('blog', {posts})
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