const express = require('express')
const app = express()

//挂载路由
app.get('/',(req,res) => {
    console.log("请求成功")
    res.send('请求')
})
app.post('/',(req,res) => {
    console.log("post请求成功")
})

app.listen(80,() => {
    console.log("express server running at http://127.0.0.1")
})