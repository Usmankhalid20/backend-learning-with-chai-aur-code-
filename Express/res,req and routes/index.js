const express = require("express");
const app = express();
const port = 3000;
const blog = require('./Routes/blog')
const shop = require('./Routes/shop')

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)


app.get("/", (req, res) => {
    console.log("hey its a get requst");
    res.send("Hello World! 2 ");
});

app.post("/", (req, res) => {
    console.log("hey its a post requst");
    res.send("Hello World! 3");
});

app.put("/", (req, res) => {
    console.log("hey its a put requst");
    res.send("Hello World! 3 put");
});

// this is use for return html file in this path
app.get("/index", (req, res) => {
    console.log("hey its a index page requst");
    res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3 })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});