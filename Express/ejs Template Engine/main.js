const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "My Website";
    let searchText = "Search now ";
    let arr = ['hey', 33, 55]
    res.render('index', { sitename: sitename, searchText: searchText, arr });
})



app.get('/blog/:slug', (req, res) => {
    let blogname = "adidas why and when";
    let blogtitle = "Why and When to Wear Adidas";
    res.render("index", { blogname: blogname, blogtitle: blogtitle });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})