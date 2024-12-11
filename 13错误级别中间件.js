const express = require('express')
const app = express()

app.get('/', (req,res) => {
    throw new Error('服务器内部错误')
    res.send('Home Page')
})

app.use(function(err,req,res,next) {
    console.log("服务器内部错误"+err.message)
    res.send(err.message)
})

app.listen(80, () => {
    console.log("express server running at 127.0.0.1")
})