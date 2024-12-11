const express = require('express')
const app = express()

//定义第一个局部中间件
const mw1 = function(req,res,next) {
    console.log("调用第一个局部中间件")
    next()
}
//定义第二个局部中间件
const mw2 = function(req,res,next) {
    console.log("调用第二个局部中间件")
    next()
}

//路由
app.get('/',[mw1,mw2], (req,res) =>{
    res.send('调用中间件的路由')
})
app.get('/user', (req,res) => {
    res.send('未调用中间件')
})

app.listen(80, () => {
    console.log("express server running at http://127.0.0.1")
})
