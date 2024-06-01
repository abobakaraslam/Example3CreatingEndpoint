//File: index.js in root directory

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Main page')
})
app.use('/web', require('./myFiles/course'))
app.use('/web/exercise', require("./myFiles/exercise"))
app.use('/web/exercise/result', require("./myFiles/result"))

app.listen(port)