const express = require('express')
const app = express()

//使用express.static静态托管资源
app.use('/clock',express.static('./clock'))
app.use(express.static('./files'))

app.listen(80,() => {
    console.log("express server running at http://127.0.0.1")
})