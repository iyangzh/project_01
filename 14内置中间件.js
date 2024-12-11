const express = require('express')
const app = express()

//配置中间件解析json格式
app.use(express.json())
//解析ure-encoded数据
app.use(express.urlencoded({extended: false}))

//req.body接受客户端发送的数据
app.post('/user', (req,res) => {
    res.send("OKOKOK")
    console.log(req.body)
})

app.post('/book',(req,res) => {
    res.send("OKOKOKOKOKOk")
    console.log(req.body)
})

app.listen(80, () => {
    console.log("express server running at 127.0.0.1")
})