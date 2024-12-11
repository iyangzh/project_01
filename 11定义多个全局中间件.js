const express = require('express')
const app = express()

//第一个全局中间件
app.use(function (req,res,next) {
    console.log("调用第一个全局中间件")
    const time = Date.now()
    req.time = time
    next()
})
//第二个全局中间件
app.use((req,res,next) => {
    console.log("调用第二个全局中间件"+req.time)
    
    next()
})

//路由
app.get('/',(req,res) => {
    res.send('add')
})
app.get('/add',(req,res) => {
    res.send("addadd")
})


app.listen(80,()=>{
    console.log("express server running at http://127.0.0.1")
})