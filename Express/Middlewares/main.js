const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

// middlewares  that is specific to this router
app.use((req, res, next) => {
    console.log(req.headers)
    req.usman = "hi, i am usman"
    fs.appendFileSync("login.txt", `${Date.now()}, is the time of request ${req.method} ${req.url} \n`)
    console.log(`${Date.now()}, is the time of request ${req.method} `)
        // res.send('hacked middlewares 1')
    next()
})

// middlewares m2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello World!' + req.usman)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})