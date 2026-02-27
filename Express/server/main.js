const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get, app.post, app.put, app.delete(path,handler)
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send(" about me ");
});

app.get("/contact", (req, res) => {
    res.send("contact me for more info");
});

app.get("/blog", (req, res) => {
    res.send(" blog post ");
});

app.get("/blog/:sulg", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`  Hello ${req.params.sulg} `);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});