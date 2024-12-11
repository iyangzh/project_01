// 导入
const express = require('express')
// 创建
const app = express()

//监听get和post请求，向客户端响应具体内容
app.get('/user',(req,res) => {
    //向客户端响应json对象
    res.send({
        name:'zs',
        age:'20',
        gender: '男'
    })
})
app.post('/user',(req,res) => {
    res.send('请求成功')
})

//req.query查询客户端请求的参数
app.get('/',(req,res) => {
    console.log(req.query)
    res.send(req.query)
})

//req.param查询动态参数
app.get('/user/:id/:name',(req,res) => {
    console.log(req.params)
    res.send(req.params)
})


// 启动
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1')
})